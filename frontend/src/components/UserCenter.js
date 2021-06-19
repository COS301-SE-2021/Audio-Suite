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
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

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
const apiURL = "http://127.0.0.1:3001";

var uid = null; 
var username = null;
var usernameList = [];
var officesList = [];
var officeIDs = [];
var officesCollected = false;
var roomsList = [];
var roomIDs = [];

function UserCenter({userJWT}){
    // -------------------------- REACT STATES --------------------------
    const [currentOffice, setCurrentOffice] = useState('')
    const [usernames, setUsernames] = useState([])
    const [offices, setOffices] = useState([])
    const [rooms, setRooms] = useState([])
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

    const updateOffices = (offices) => {
        setOffices(offices);
    }

    const updateRooms = (rooms) => {
        setRooms(rooms);
    }
    // ------------------------------------------------------------------

    // ------------------ GET USERNAME OF CURRENT USER ------------------
    
        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jwt: userJWT })
        };
        
        fetch(apiURL+"/api/user/details", requestOptions).then(res => res.json()).then(
            (result) => {
                if(result != null && result.id != null)
                {
                    /* SET VALUES FROM RESPONSE */
                    uid = result.id;
                    username = result.userName;
                }
                else
                {
                    alert('Invalid JWT.');
                }
            }
        )
        
    // ------------------------------------------------------------------

    // --------------- GET OFFICES THAT USER IS A PART OF ---------------
    if(!officesCollected){
        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jwt: userJWT })
        };
        
        fetch(apiURL+"/api/office/getUserOffices", requestOptions).then(res => res.json()).then(
        (result) => {
            if(result != null && result.Offices != null)
            {
                /* SET VALUES FROM RESPONSE */
                for(var x=0;x<result.Offices.length;x++){
                    const office = ""+result.Offices[x].name;
                    const id = ""+result.Offices[x].id;
                    const newOfficeButton = <Row key={id}><Col><Button variant="primary" block onClick={ async () => {joinOffice(office)} }>{office}</Button></Col></Row>;
                    if(officesList.length < result.Offices.length){
                        officesList.push(newOfficeButton)
                        officeIDs.push([id,office]);
                    }
                }
                officesCollected = true;
                updateOffices([]);
            }
            else
            {
                alert('Invalid JWT.');
            } 
        }
        )
    }
    // ------------------------------------------------------------------
        
    // Create Client and Mic Track
    const [remoteUsers, setRemoteUsers] = useState([]);
    const client = useClient();
    const track = useMicrophoneTrack()['track'];

    // Function to initialise the SDK
    let init = async () => {
        setRemoteUsers([]);
        client.on("user-published", async (user, mediaType) => {
            await client.subscribe(user, mediaType);

            requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: user.uid+"" })
            };
            
            fetch(apiURL+"/api/user/getUsernameById", requestOptions).then(res => res.json()).then(
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
            if(currentRoom !== ''){
                await leave("room");
            }
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

    let leave = async (type) => {
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

        if(type === "office"){
            changeCurrentOfficeTo('');
        }

        changeCurrentRoomTo('');
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
                userNames.push([""+usernameList[x][1]+"\n"]);
            }
        }

        return userNames;
    }

    async function joinOffice(name){
        changeCurrentOfficeTo(name);

        roomsList = [];
        roomIDs = [];
        // ------------------ GET ROOMS IN CURRENT OFFICE ------------------
        var currentOfficeID = null;
        for(var i=0;i<officeIDs.length;i++){
            if(officeIDs[i][1] === name){
                currentOfficeID = officeIDs[i][0];
            }
        }

        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jwt: userJWT, officeID: currentOfficeID })
        };

        fetch(apiURL+"/api/room/getOfficeRooms", requestOptions).then(res => res.json()).then(
        (result) => {
            
            if(result != null && result.Rooms != null)
            {
                for(var x=0;x<result.Rooms.length;x++){
                    const room = ""+result.Rooms[x].roomName;
                    const id = ""+result.Rooms[x].id;
                    const newRoomButton = <Button variant="secondary" key={id} block onClick={ async () => {join(room)} }>{room}</Button>;
                    if(roomsList.length < result.Rooms.length){
                        roomsList.push(newRoomButton)
                        roomIDs.push([id,room]);
                    }
                }
                updateRooms([]);
            }
            else
            {
                alert('Invalid JWT.');
            } 
        }
        )
        // ------------------------------------------------------------------
    }

    function getUserOffices(){
        var tmp = [];
        for (var i=0;i<officesList.length;i++){
            if(!tmp.includes(officesList[i])){
                tmp.push([officesList[i]]);
                tmp.push(<br key={i}></br>)
            }
        }
        return tmp;
    }

    function getOfficeRooms(){
        var tmp = [];
        for (var i=0;i<roomsList.length;i++){
            if(!tmp.includes(roomsList[i])){
                tmp.push([roomsList[i]]);
                tmp.push(<br key={i}></br>)
            }
        }
        return tmp;
    }

    return (
        <>
            <Col md={3} lg={2}>
                <UserSideBar officeSelected={currentOffice} leaveOffice={leave} getOffices={getUserOffices} joinOffice={joinOffice}/>
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
                                <FloorPlan officeSelected={currentOffice} join={join} getRemoteUsers={getRemoteUsers} getOfficeRooms={getOfficeRooms} />
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
