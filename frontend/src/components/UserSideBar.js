import React from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';

import '../CSS/UserSideBar.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UserSideBar = ({officeSelected, onClick}) => {
    // Create Client
    var client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    // Setup audio stream and join channel
    var audioTrack = null;
    var remoteUsers = {};

    // Agora client options
    var options = {
        appid: '7afb53157f754f6f8023f31fb343404a',
        channel: 'Pegasus',
        uid: null,
        token: '0067afb53157f754f6f8023f31fb343404aIABXR8MXm4ZVIy9Pu3xyiiAi/9rTJ4erKMgOgLe0/fflZifo+4MAAAAAEABFAsi6Q8PMYAEAAQBDw8xg'
    };

    async function join(officeName) {
        // Join office frontend state
        onClick(officeName);
        //options.channel = officeName;

        // add event listener to play remote tracks when remote user publishs.
        client.on("user-published", handleUserPublished);
        client.on("user-unpublished", handleUserUnpublished);
      
        // join a channel and create local tracks, we can use Promise.all to run them concurrently
        [ options.uid, audioTrack ] = await Promise.all([
            // join the channel
            client.join(options.appid, options.channel, options.token || null, options.uid),
            // create local track using microphone
            AgoraRTC.createMicrophoneAudioTrack()
        ]);

        // publish local tracks to channel
        await client.publish(audioTrack);
        console.log("publish success");
    }
      
    async function leave() {
        // Join office frontend state
        onClick("");

        if(audioTrack) {
            audioTrack.stop();
            audioTrack.close();
            audioTrack = undefined;
        }
      
        // remove remote users and player views
        remoteUsers = {};
      
        // leave the channel
        await client.leave();

        console.log("client leaves channel success");
    }

    async function subscribe(user, mediaType) {
        //const uid = user.uid;
        // subscribe to a remote user
        await client.subscribe(user, mediaType);
        console.log("subscribe success");
        if (mediaType === 'audio') {
          // Below is the test for setting the volume of INDIVIDUAL office users.
          /*  if (uid == '22222'){
                console.log("SETTING VOLUME for LAPTOP!");
                user.audioTrack.setVolume(10);
            }else if(uid == '33333'){
              console.log("SETTING VOLUME for KEANU!");
                user.audioTrack.setVolume(1000);
            }*/
          //user.audioTrack.setVolume(1000); //This will set the volume of the ENTIRE office to 1000 - 100x louder than original volume.
          user.audioTrack.play();
        }
      }
      
      function handleUserPublished(user, mediaType) {
        const id = user.uid;
        remoteUsers[id] = user;
        subscribe(user, mediaType);
      }
      
      function handleUserUnpublished(user) {
        const id = user.uid;
        delete remoteUsers[id];
      }

    return (
        <div className="sidebar">
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Offices:</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={ async () => { await join('Epi-Use');} }>Epi-Use</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={ async () => { await join('Pegasus');} }>Pegasus</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Button variant="outline-light" block onClick={ async () => { await join('Tuks CS');} }>Tuks CS</Button>
                    </Col>
                </Row>
                <br></br>
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
                            <Button variant="outline-light" block onClick={ async () => { await leave();} }>Leave Office</Button>
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    )
}

export default UserSideBar
