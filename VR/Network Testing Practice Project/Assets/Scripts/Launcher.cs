using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;

public class Launcher : MonoBehaviourPunCallbacks
{
    // Variables
    string gameVersion = "1";

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
            PhotonNetwork.ConnectUsingSettings();
            PhotonNetwork.GameVersion = gameVersion;
        }
    }

    /// <summary>
    /// Functions for logging errors
    /// </summary>
        
    public override void OnConnectedToMaster()
    {
        // Let user know they have connected
        progressLabel.SetActive(false);
        controlPanel.SetActive(false);

        Debug.Log("Connected to Master");
        PhotonNetwork.JoinRandomRoom();
    }

    public override void OnDisconnected(DisconnectCause cause)
    {
        Debug.LogWarningFormat("Disconnected because of: {0}", cause);

        // Let the user know they disconnected
        progressLabel.SetActive(false);
        controlPanel.SetActive(true);
    }

    public override void OnJoinRoomFailed(short returnCode, string message)
    {
        Debug.Log("No room availible creating new one");
        PhotonNetwork.CreateRoom(null, new RoomOptions{MaxPlayers = maxPlayersPerRoom});
    }

    public override void OnJoinedRoom()
    {
        Debug.Log("Joinded a room");
    }
}


