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
const token = "0067afb53157f754f6f8023f31fb343404aIACGoCNjvOJJ54fH6kkdnC1VPZlHa50LQvTt1uF+9v2QSRRkBDcAAAAAEABFAsi6k7/PYAEAAQCTv89g";
const channel = "AUDIO CHANNEL";
const apiURL = "http://127.0.0.1:3001";

var uid = null; 
var username = null;
var usersList = [];
var usernameList = [];
var currOffice = '';
var officesList = [];
var officeIDs = [];
var officesCollected = false;
var roomsList = [];
var roomIDs = [];

function UserCenter({userJWT}){
    // -------------------------- REACT STATES --------------------------
    const [pageChanges, setPageChanges] = useState(false);
    const [currentOffice, setCurrentOffice] = useState('');
    const [usernames, setUsernames] = useState();
    const [offices, setOffices] = useState();
    const [rooms, setRooms] = useState();
    const [currentRoom, setCurrentRoom] = useState('');
    const [selectedTab, setSelectedTab] = useState('floorPlan');

    const changeCurrentOfficeTo = (Office) => {
        setCurrentOffice(Office);
    }

    const changeCurrentRoomTo = (Room) => {
        setCurrentRoom(Room);
    }

    const updateUsers = () => {
        setUsernames({});
    }

    const updateOffices = () => {
        setOffices({});
    }

    const updateRooms = () => {
        setRooms({});
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
                    console.log('Invalid JWT.');
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
                    const newOfficeButton = <Row key={id}><Col><Button variant="primary" block onClick={ async () => {await joinOffice(office)} }>{office}</Button></Col></Row>;
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
                console.log('Invalid JWT.');
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
        console.log("--------------------- INIT ---------------------");
        setRemoteUsers([]);
        client.on("user-published", async (user, mediaType) => {
            console.log("USER FOUND!");
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
                        console.log('Invalid User ID.')
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
        console.log("JOINING...");
        await client.join(appId, channel, token, uid);
        console.log("JOINED.");
        if (track) await client.publish(track);
        console.log("PUBLISHING.");
    };

    let join = async (room) => {
        console.log("--------------------- JOIN ---------------------");
        if(currentRoom !== room){
            if(currentRoom !== ''){
                await leave("room");
            }
            changeCurrentRoomTo(room);
            if (track !== undefined) {
                console.log("init ready");
                setRemoteUsers([]);
                usernameList = [];
                await init(channel);
            }
            /* ADD USER TO ROOM IN DB */
            // Get ID of current office
            var currentOfficeID = null;
            for(var i=0;i<officeIDs.length;i++){
                if(officeIDs[i][1] === currOffice){
                    currentOfficeID = officeIDs[i][0];
                }
            }

            // Get ID of current Room
            var currentRoomID = null;
            for(i=0;i<roomIDs.length;i++){
                if(roomIDs[i][1] === room){
                    currentRoomID = roomIDs[i][0];
                }
            }

            requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ jwt: userJWT, officeID: currentOfficeID, roomID: currentRoomID })
            };
            
            fetch(apiURL+"/api/room/join", requestOptions).then(res => {
                    if(res.status === 400){
                        console.log('Invalid JWT or Office/Room ID.')
                    }else{
                        console.log("JOINED ROOM: "+room);
                    }
                }
            )
        }
    }

    async function leave(type){
        console.log("--------------------- LEAVE ---------------------");
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

        /* REMOVE USER FROM ROOM IN DB */
        // Get ID of current office
        var currentOfficeID = null;
        for(var i=0;i<officeIDs.length;i++){
            if(officeIDs[i][1] === currOffice){
                currentOfficeID = officeIDs[i][0];
            }
        }

        // Get ID of current Room
        var currentRoomID = null;
        for(i=0;i<roomIDs.length;i++){
            if(roomIDs[i][1] === currentRoom){
                currentRoomID = roomIDs[i][0];
            }
        }
        
        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jwt: userJWT, officeID: currentOfficeID, roomID: currentRoomID })
        };
        
        fetch(apiURL+"/api/room/leave", requestOptions).then(res => {
                if(res.status === 400){
                    console.log('Invalid JWT or Office/Room ID.')
                }else{
                    console.log("LEFT ROOM: "+currentRoom);
                }
            }
        )
        
        if(type === "office"){
            changeCurrentOfficeTo('');
            currOffice = '';
        }

        usersList = [];
        setRemoteUsers([]);
        await client.unpublish();
        await client.leave();
        changeCurrentRoomTo('');
    };

    let joinOffice = async (name) => {
        console.log("--------------------- JOIN OFFICE ---------------------");
        if(currentRoom !== ''){
            leave("office");
            changeCurrentRoomTo('');
        }
        changeCurrentOfficeTo(name);
        currOffice = name;

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
                    const newRoomButton = <Button style={{width: "50%"}} variant="secondary" key={id} block onClick={ async () => {await join(room)} }>{room}</Button>;
                    if(roomsList.length < result.Rooms.length){
                        roomsList.push(newRoomButton)
                        roomIDs.push([id,room]);
                    }
                }
                updateOffices();
            }
            else
            {
                console.log('Invalid JWT.');
            } 
        }
        )
        // ------------------------------------------------------------------
    }

    function getUserOffices(){
        console.log("--------------------- GET USER OFFICES ---------------------");
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
        console.log("--------------------- GET OFFICE ROOMS ---------------------");
        var tmp = [];
        for (var i=0;i<roomsList.length;i++){
            if(!tmp.includes(roomsList[i])){
                tmp.push([roomsList[i]]);
                tmp.push(<br key={i}></br>)
            }
        }
        return tmp;
    }


    function getRemoteUsers(){
        console.log("--------------------- GET REMOTE USERS ---------------------");
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
        console.log("USERNAME LIST: "+usersList);
        // ----------------- GET ROOMS OF REMOTE USERS -----------------
        /*for(var x=0;x<)
        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jwt: userJWT, officeID: currentOfficeID, roomID: currentRoomID })
        };
        
        fetch(apiURL+"/api/room/join", requestOptions).then(res => {
            if(res.status === 400){
                console.log('Invalid JWT or Office/Room ID.')
            }else{
                console.log("JOINED ROOM: "+room);
            }
        })*/
        // -------------------------------------------------------------
        
        for(var x=0;x<usernameList.length;x++){
            if(usersList.includes(""+usernameList[x][0]) && !userNames.includes(""+usernameList[x][1]+"\n")){
                userNames.push(""+usernameList[x][1]+"\n");
                console.log(userNames);
            }
        }

        return userNames;
    }

    return (
        <>
            <Col md={3} lg={2}>
                <UserSideBar jwt={userJWT} officeSelected={currentOffice} leaveOffice={leave} getOffices={getUserOffices} joinOffice={joinOffice}/>
            </Col>
            <Col md={9} lg={10}>
                <div id="TabbedPane">
                    {
                        currOffice == '' 
                        ? 
                        <center>
                            <br></br>
                            <br></br>
                            <h3>
                                Please select an Office.
                            </h3>
                        </center>
                        :
                        <Tabs id="UserContent-tab" activeKey={selectedTab} onSelect={(k) => setSelectedTab(k)}>
                            <Tab eventKey="floorPlan" title="Floor Plan">
                                <FloorPlan officeSelected={currentOffice} join={join} getRemoteUsers={getRemoteUsers} getOfficeRooms={getOfficeRooms} />
                            </Tab>
                            <Tab eventKey="textChannel" title="Text Channel">
                                <TextChannel officeSelected={currentOffice}/>
                            </Tab>
                        </Tabs>
                    }
                </div>
            </Col>
        </>
    )
}

export default UserCenter
