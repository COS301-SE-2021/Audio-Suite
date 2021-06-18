import { useState } from 'react'

// Agora.io Audio Libraries
import { createClient, createMicrophoneAudioTrack } from "agora-rtc-react";

import '../CSS/UserCenter.css'

import UserSideBar from './UserSideBar'
import FloorPlan from './FloorPlan'
import TextChannel from './TextChannel'

import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

// Agora Config
const clientConfig = { 
    mode: "rtc", codec: "vp8",
};
const useClient = createClient(clientConfig);
const useMicrophoneTrack = createMicrophoneAudioTrack();
const appId = "7afb53157f754f6f8023f31fb343404a";
const token = '0067afb53157f754f6f8023f31fb343404aIAAbdyOcdM0CXfVwAV3xSf3GsQ1QXg5D16OoEMH5usYLGvFz67sAAAAAEABFAsi6yxbOYAEAAQDKFs5g';
const channel = 'AUDIO-SUITE';
var usersList = [];

var uid = null; 
var username = null;
var usernameList = [];

function UserCenter({userJWT}){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jwt: userJWT })
    };
    
    fetch("http://127.0.0.1:3001/api/user/details", requestOptions)
    .then(res => res.json())
    .then(
        (result) => {
            if(result != null && result.id != null)
            {
                /* SET VALUES FROM RESPONSE */
                uid = result.id;
                username = result.userName;
            }
            else
            {
                alert('Invalid JWT.')
            }
        }
    )

    const [currentOffice, setCurrentOffice] = useState('')
    const [usernames, setUsernames] = useState([])
    const [currentRoom, setCurrentRoom] = useState('')
    const [selectedTab, setSelectedTab] = useState('floorPlan')

    const changeCurrentOfficeTo = (Office) => {
        setCurrentOffice(Office);
    }

    const changeCurrentRoomTo = (Room) => {
        setCurrentRoom(Room);
    }

    const updateUsers = (usernames) => {
        setUsernames(usernames);
    }


    // Create Client and Mic Track
    const [remoteUsers, setRemoteUsers] = useState([]);
    const client = useClient();
    const track = useMicrophoneTrack()['track'];

    // Function to initialise the SDK
    let init = async () => {
        setRemoteUsers([]);
        client.on("user-published", async (user, mediaType) => {
            await client.subscribe(user, mediaType);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: user.uid+"" })
            };
            
            fetch("http://127.0.0.1:3001/api/user/getUsernameById", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result != null && result.userName != null){
                        /* SET VALUES FROM RESPONSE */
                        usernameList.push([result.id+"" ,""+result.userName]);
                        updateUsers([]);
                    }else{
                        alert('Invalid User ID.')
                    }
                }
            )

            console.log("subscribe success");
            if (mediaType === "audio") {
                usersList.push(""+user.uid);
                setRemoteUsers(usersList);
                user.audioTrack?.play();
                updateUsers([]);
            }
        });

        client.on("user-unpublished", (user, type) => {
            console.log("unpublished", user, type);
            if (type === "audio") {
                user.audioTrack?.stop();
            }
        });

        client.on("user-left", (user) => {
            var tmp = [];
            for(var x = 0; x < usersList.length; x++){
                if(usersList[x] !== ""+user.uid ){
                    tmp.push(usersList[x]);
                }
            }
            usersList = tmp;
            setRemoteUsers(tmp);
            console.log("leaving", user);
            updateUsers([]);
        });

        await client.join(appId, channel, token, uid);
        if (track) await client.publish(track);
    };
    let join = async (room) => {
        if(currentRoom !== room){
            /*if(currentRoom !== ''){
                await leave();
            }*/
            changeCurrentRoomTo(room);
            if (track !== undefined) {
                console.log("init ready");
                setRemoteUsers([]);
                usernameList = [];
                init(channel);
            }
            /* ADD USER TO ROOM IN DB */
        }
    }

    let leave = async () => {
        client.on("user-published", async (user, mediaType) => {
            await client.unsubscribe(user, mediaType);
            console.log("unsubscribe success");
            if (mediaType === "audio") {
                user.audioTrack?.stop();
            }
        });

        client.on("user-unpublished", (user, type) => {
            console.log("unpublished", user, type);
            if (type === "audio") {
                user.audioTrack?.stop();
                user.audioTrack?.close();
            }
        });

        client.on("user-left", (user) => {
            console.log("leaving", user);
        });
        changeCurrentRoomTo('');
        changeCurrentOfficeTo('');
        usersList = [];
        setRemoteUsers([]);

        await client.unpublish();
        await client.leave();

        /* REMOVE USER FROM ROOM IN DB */
    };

    function getRemoteUsers(){
        var users = [];
        usersList = [];
        var userNames = [];
        if(username !== null && currentRoom !== ''){
            userNames.push(""+username+"\n");
        }
        
        if(remoteUsers.length !== 0){
            for(var i=0;i<remoteUsers.length;i++){
                if(!users.includes("\n"+remoteUsers[i])){
                    users.push("\n"+remoteUsers[i]);
                    usersList.push(""+remoteUsers[i]);
                }
            }
        }

        if(!users.includes("\n"+uid)){
            users.push("\n"+uid);
            usersList.push(""+uid);
        }

        for(var x=0;x<usernameList.length;x++){
            if(usersList.includes(""+usernameList[x][0]) && !userNames.includes(""+usernameList[x][1]+"\n")){
                userNames.push(""+usernameList[x][1]+"\n");
                console.log(usernameList[x][1]);
            }
        }

        console.log("----------------------START---------------------");
        console.log(""+userNames);
        console.log("----------------------FINSIH--------------------");

        return userNames;
    }

    return (
        <>
            <Col md={3} lg={2}>
                <UserSideBar officeSelected={currentOffice} setCurrentOffice={changeCurrentOfficeTo} leaveOffice={leave}/>
            </Col>
            <Col md={9} lg={10}>
                <div id="TabbedPane">
                    {
                        currentOffice === '' 
                        ? 
                        <center>
                            <br></br>
                            <br></br>
                            <h3>
                                Please select an Office.
                            </h3>
                        </center>
                        :
                        <Tabs
                            id="UserContent-tab"
                            activeKey={selectedTab}
                            onSelect={(k) => setSelectedTab(k)} 
                        >
                            <Tab eventKey="floorPlan" title="floorPlan">
                                <FloorPlan joinRoom={join} officeSelected={currentOffice} getRemoteUsers={getRemoteUsers} />
                            </Tab>
                            <Tab eventKey="textChannel" title="textChannel">
                                <TextChannel />
                            </Tab>
                        </Tabs>
                    }
                </div>
            </Col>
        </>
    )
}

export default UserCenter
