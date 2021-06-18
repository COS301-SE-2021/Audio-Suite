import React, { useState } from 'react'

// Agora.io Audio Libraries
import { createClient, createMicrophoneAudioTrack } from "agora-rtc-react";

import '../CSS/UserSideBar.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Agora Config
const clientConfig = { 
    mode: "rtc", codec: "vp8",
};
const useClient = createClient(clientConfig);
const useMicrophoneTrack = createMicrophoneAudioTrack();
const appId = "7afb53157f754f6f8023f31fb343404a";
const token = '0067afb53157f754f6f8023f31fb343404aIABXR8MXm4ZVIy9Pu3xyiiAi/9rTJ4erKMgOgLe0/fflZifo+4MAAAAAEABFAsi6Q8PMYAEAAQBDw8xg';
const uid = null; // Set to User ID once DB is connected
const channel = 'Pegasus';
var usersList = [];
var officeSelected = '';

function UserSideBar() {
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
    async function join(office){
        if( officeSelected !== office ){
            await leave();
            officeSelected = office;
            if (track !== undefined) {
                console.log("init ready");
                setRemoteUsers([]);
                init(channel);
            }
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
        
        officeSelected = '';
        var tmp = [];
        usersList = tmp;
        setRemoteUsers([]);
        console.log("REMOTE USERS LENGTH ================== "+remoteUsers.length);

        await client.unpublish();
        await client.leave();
    };

    function getRemoteUsers(){
        if(remoteUsers.length !== 0){
            console.log("----------------- GETTING REMOTE USERS -----------------");
            var users = [];
            usersList = [];
            for(var i=0;i<remoteUsers.length;i++){
                if(!users.includes("\n"+remoteUsers[i])){
                    console.log("REMOTE USER ->"+remoteUsers[i])
                    users.push("\n"+remoteUsers[i]);
                    usersList.push(""+remoteUsers[i]);
                }
            }
            for( var x=0;x<users.length;x++){
                if(users[x] !== undefined && users[x] !== null){
                    console.log("USERS: "+users[x]);
                }
            }
            console.log(usersList);
        }
        return users;
    }

    return(
        <Container fluid>
            <Row>
                <Col>
                    <h3>Offices:</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-light" block onClick={ async () => {await join('Epi-Use')} }>Epi-Use</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button variant="outline-light" block onClick={ async () => {await join('Pegasus')} }>Pegasus</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button variant="outline-light" block onClick={ async () => {await join('Tuks CS')} }>Tuks CS</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <h4>Users:</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <pre>
                        {
                        getRemoteUsers()
                        }
                    </pre>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <h4>Quick Settings:</h4>
                </Col>
            </Row>
            {
                officeSelected !== ''
                &&
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={ async () => {await leave()} }>Leave Office</Button>
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default UserSideBar
