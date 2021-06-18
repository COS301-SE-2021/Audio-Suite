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
const token = '0067afb53157f754f6f8023f31fb343404aIABXR8MXm4ZVIy9Pu3xyiiAi/9rTJ4erKMgOgLe0/fflZifo+4MAAAAAEABFAsi6Q8PMYAEAAQBDw8xg';
const channel = 'Pegasus';
var usersList = [];

// GET USER OBJECT FROM DB -> Fetch (user/details {JWT})
const uid = null; // Set to User ID once DB is connected

function UserCenter({userJWT}){
    const [currentOffice, setCurrentOffice] = useState('')
    const [currentRoom, setCurrentRoom] = useState('')
    const [selectedTab, setSelectedTab] = useState('floorPlan')

    const changeCurrentOfficeTo = (Office) => {
        setCurrentOffice(Office);
    }

    const changeCurrentRoomTo = (Room) => {
        setCurrentRoom(Room);
    }


    // Create Client and Mic Track
    const [remoteUsers, setRemoteUsers] = useState([]);
    const client = useClient();
    const track = useMicrophoneTrack()['track'];
    console.log(track);

    // Function to initialise the SDK
    let init = async () => {
        setRemoteUsers([]);
        client.on("user-published", async (user, mediaType) => {
            await client.subscribe(user, mediaType);
            console.log("subscribe success");
            if (mediaType === "audio") {
                usersList.push(""+user.uid);
                console.log(usersList);
                setRemoteUsers(usersList);
                user.audioTrack?.play();
                getRemoteUsers();
            }
        });

        client.on("user-unpublished", (user, type) => {
            console.log("unpublished", user, type);
            if (type === "audio") {
                var tmp = [];
                for(var x = 0; x < usersList.length; x++){
                    if(usersList[x] !== ""+user.uid ){
                        tmp.push(usersList[x]);
                    }
                }
                usersList = tmp;
                setRemoteUsers(tmp);
                user.audioTrack?.stop();
                getRemoteUsers();
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
            getRemoteUsers();
        });

        await client.join(appId, channel, token, uid);
        if (track) await client.publish(track);
    };
    let join = async (room) => {
        if(currentRoom !== room){
            if(currentRoom !== ''){
                await leave();
            }
            changeCurrentRoomTo(room);
            if (track !== undefined) {
                console.log("init ready");
                setRemoteUsers([]);
                init(channel);
            }
            /* ADD USER TO ROOM IN DB */
        }
    }

    let leave = async () => {
        console.log("---------------------------- LEAVING ----------------------------");
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
        
        changeCurrentOfficeTo('');
        var tmp = [];
        usersList = tmp;
        setRemoteUsers([]);
        console.log("REMOTE USERS LENGTH ================== "+remoteUsers.length);

        await client.unpublish();
        await client.leave();

        /* REMOVE USER FROM ROOM IN DB */
    };

    function getRemoteUsers(){
        if(remoteUsers.length !== 0){
            var users = [];
            usersList = [];
            for(var i=0;i<remoteUsers.length;i++){
                if(!users.includes("\n"+remoteUsers[i])){
                    users.push("\n"+remoteUsers[i]);
                    usersList.push(""+remoteUsers[i]);
                }
            }
            for( var x=0;x<users.length;x++){
                if(users[x] !== undefined && users[x] !== null){
                }
            }
            console.log(usersList);
        }
        return users;
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
