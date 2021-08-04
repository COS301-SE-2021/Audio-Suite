using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;

public class NetworkManger : MonoBehaviourPunCallbacks
{

    // Start is called before the first frame update
    void Start() 
    {
        connectToServer();
    }

    // Update is called once per frame
    void Update() 
    {
        
    }

    // Connect to server 
    void connectToServer()
    {
        PhotonNetwork.ConnectUsingSettings();
        Debug.Log("Try Connect To Server...");
    }

    // Create the rooms on connection to server
    public override void OnConnectedToMaster() {

        Debug.Log("Connected To Server...");
        base.OnConnectedToMaster();

        // Set up the room options
        RoomOptions roomOptions = new RoomOptions();
        roomOptions.MaxPlayers = 5;
        roomOptions.IsVisible = true;
        roomOptions.IsOpen = true;

        // Create or join the room
        PhotonNetwork.JoinOrCreateRoom("Room 1", roomOptions, TypedLobby.Default);
    }

    public override void OnJoinedRoom()
    {
        Debug.Log("Joined a Room :D");
        base.OnJoinedRoom();
    }

    public override void OnPlayerEnteredRoom(Player newPlayer)
    {
        Debug.Log("A new player joined the room");
        base.OnPlayerEnteredRoom(newPlayer);
    }
}
