import React, { useEffect, useContext, useState } from 'react'

// Agora.io Audio Libraries
import AgoraRTC from "agora-rtc-sdk-ng";
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
const uid = 11111;
const channel = 'Pegasus';

const UserSideBar = () => {
    //const { setInCall, channelName } = [true, channel];
    //const [users, setUsers] = useState([]);
    //const [start, setStart] = useState(false);

    // Create Client and Mic Track
    const client = useClient();
    const track = useMicrophoneTrack()['track'];
    console.log(track);

    // function to initialise the SDK
    let init = async (name) => {
        client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        console.log("subscribe success");
        if (mediaType === "audio") {
            user.audioTrack?.play();
        }
        });

        client.on("user-unpublished", (user, type) => {
        console.log("unpublished", user, type);
        if (type === "audio") {
            user.audioTrack?.stop();
        }
        });

        client.on("user-left", (user) => {
        console.log("leaving", user);
        // Remove User From List
        });

        await client.join(appId, channel, token, null);
        if (track) await client.publish(track);
        //setStart(true);
    };
    function join(){
        if (track != undefined) {
            console.log("init ready");
            init(channel);
        }
    }

    let leave = async (name) => {
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
        }
        });

        client.on("user-left", (user) => {
        console.log("leaving", user);
        // Remove User From List
        });
        
        await client.unpublish();
        await client.leave();
        
        //setStart(true);
    };

    return(
        <Container fluid>
            <Row>
                <Col>
                    <h3>Offices:</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-light" block onClick={ async () => {join()} }>Epi-Use</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button variant="outline-light" block onClick={ async () => {join()} }>Pegasus</Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Button variant="outline-light" block onClick={ async () => {join()} }>Tuks CS</Button>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
                <Col>
                    <h4>Quick Settings:</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-light" block onClick={ async () => {leave()} }>Leave Office</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default UserSideBar
