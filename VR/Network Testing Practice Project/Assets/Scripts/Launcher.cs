using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;

public class Launcher : MonoBehaviourPunCallbacks
{
    // Variables
    string gameVersion = "1";

    private bool isConnecting;

    [SerializeField]
    private byte maxPlayersPerRoom = 4;

    [SerializeField]
    private GameObject progressLabel;

    [SerializeField]
    private GameObject controlPanel;

    // Method called before start
    void Awake()
    {
        PhotonNetwork.AutomaticallySyncScene = true;
    }

    // Called on start of script
    void Start()
    {
        progressLabel.SetActive(false);
        controlPanel.SetActive(true);
    }

    // Function used to connect or create rooms 
    public void Connect()
    {
        // Let the player know we are trying to connect
        progressLabel.SetActive(true);
        controlPanel.SetActive(false);

        // Check if we are already connected
        if (PhotonNetwork.IsConnected)
        {
            PhotonNetwork.JoinRandomRoom();
        }
        else
        {
            isConnecting = PhotonNetwork.ConnectUsingSettings();
            PhotonNetwork.GameVersion = gameVersion;
        }
    }

    /// <summary>
    /// Functions for logging errors
    /// </summary>
        
    public override void OnConnectedToMaster()
    {
        // Log the connection
        Debug.Log("Connected to Master");

        // Check that we dont continuously look for new rooms 
        if (isConnecting)
        {
            PhotonNetwork.JoinRandomRoom();
            isConnecting = false;
        }
    }

    public override void OnDisconnected(DisconnectCause cause)
    {
        // Log the cause and reset isConnecting
        Debug.LogWarningFormat("Disconnected because of: {0}", cause);
        isConnecting = false;

        // Let the user know they disconnected
        progressLabel.SetActive(false);
        controlPanel.SetActive(true);

    }

    public override void OnJoinRandomFailed(short returnCode, string message)
    {
        Debug.Log("No room availible creating new one");
        PhotonNetwork.CreateRoom(null, new RoomOptions{MaxPlayers = maxPlayersPerRoom});
    }

    public override void OnJoinedRoom()
    {
        // Log that a room has been joined
        Debug.Log("Joinded a room");

        // Check which scene to load
        if(PhotonNetwork.CurrentRoom.PlayerCount == 1)
        {
            // Log the room chosen and connect to it
            Debug.Log("Loading Room 1");
            PhotonNetwork.LoadLevel("Room for 1");
        }
    }
}


