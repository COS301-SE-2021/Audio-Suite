using System.Collections;
using System.Collections.Generic;

using UnityEngine;

using Photon.Pun;
using Photon.Realtime;

public class Launcher : MonoBehaviourPunCallbacks
{
    // Variables
    private string gameVersion = "1";
    private bool isConnected;

    // Method called before start
    void Awake()
    {
        PhotonNetwork.AutomaticallySyncScene = true;
    }

    /// <summary>
    /// On start of the program we want to connect to the rooms. We therefore call the function that does this.
    /// </summary>
    void Start()
    {
        Connect();
    }

    /// <summary>
    /// Serve as a reconnect function if the user suddently drops or gets disconnected
    /// </summary>
    void Update()
    {
        Connect();
    }

    /// <summary>
    /// The function used to connect the user to the right room or create the room if they are the first people in it. Need to pull in the room name from the website.
    /// 
    /// TODO:
    /// Add allowed clients restraint
    /// </summary>
    private void Connect()
    {
        // Check if we need to connect to the network
        if (isConnected)
        {
            // Create or join the room
            PhotonNetwork.JoinOrCreateRoom("placeHolder", new RoomOptions{MaxPlayers = 10}, TypedLobby.Default);
        }
        else
        {
            // Connect to the network
            isConnected = PhotonNetwork.ConnectUsingSettings();
            PhotonNetwork.GameVersion = gameVersion;
        }
    }

    /// <summary>
    /// This function is called when the Connect() function creates the connection to the network
    /// </summary>
    public override void OnConnectedToMaster()
    {
        base.OnConnectedToMaster();
        Debug.Log("Connected To Master");

        // Create or join a room after connecting
        if (isConnected)
        {            
            PhotonNetwork.JoinOrCreateRoom("placeHolder", new RoomOptions { MaxPlayers = 10 }, TypedLobby.Default);
        }
    }

    /// <summary>
    /// If the user gets disconnected for any reason log it.
    /// </summary>
    /// <param name="cause">The cause of the disconnect</param>
    public override void OnDisconnected(DisconnectCause cause)
    {
        // Log the cause and reset isConnecting
        Debug.LogWarningFormat("Disconnected because of: {0}", cause);
        isConnected = false;
    }

    /// <summary>
    /// If photon fails to create a room
    /// </summary>
    /// <param name="returnCode">The error that was generated when it failed</param>
    /// <param name="message">The message generated when it failed</param>
    public override void OnCreateRoomFailed(short returnCode, string message)
    {
        base.OnCreateRoomFailed(returnCode, message);
    }

    /// <summary>
    /// When the user joins a room 
    /// </summary>
    public override void OnJoinedRoom()
    {
        base.OnJoinedRoom();
        Debug.Log("Joined the room");
    }
}
