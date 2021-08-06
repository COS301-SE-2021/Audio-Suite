using System;
using System.Collections;

using UnityEngine;
using UnityEngine.SceneManagement;

using Photon.Pun;
using Photon.Realtime;

public class GameManager : MonoBehaviourPunCallbacks
{
    // Variablse
    public static GameManager Instance;
    public GameObject playerPrefab;

    // Run before update
    void Start()
    {
        // Instanciate the GameManager for use in other programs
        Instance = this;

        // Create the Prefab for spawning players
        if (playerPrefab == null)
        {
            Debug.LogError("< Color = Red >< a > Missing </ a ></ Color > playerPrefab Reference.Please set it up in GameObject 'Game Manager'", this);
        }
        else
        {
            // Only instanciate if the local player doesnt have an instance
            if (PlayerManager.LocalPlayerInstance == null)
            {
                Debug.LogFormat("We are Instantiating LocalPlayer from {0}", Application.loadedLevelName);
                PhotonNetwork.Instantiate(this.playerPrefab.name, new Vector3(0f, 5f, 0f), Quaternion.identity, 0);
            }
            else
            {
                Debug.LogFormat("Ignoring scene load for {0}", SceneManagerHelper.ActiveSceneName);
            }
        }
    }
    
    public override void OnLeftRoom()
    {
        SceneManager.LoadScene(0);
    }

    public void LeaveRoom()
    {
        PhotonNetwork.LeaveRoom();
    }

    void LoadArena()
    {
        // Only the master client can load a new level 
        if (!PhotonNetwork.IsMasterClient)
        {
            Debug.LogError("Only the master client can load a new level");
        }

        // If we are master client (we load the string name of the room so we can load the room with the player count in it)
        Debug.LogFormat("PhotonNetwork: Loading Level: {0}", PhotonNetwork.CurrentRoom.PlayerCount);
        PhotonNetwork.LoadLevel("Room for " + PhotonNetwork.CurrentRoom.PlayerCount);
    }

    public override void OnPlayerEnteredRoom(Player other)
    {
        // Log that a player has joined the room
        Debug.LogFormat("OnPlayerEnteredRoom() {0}", other.NickName);

        // If the joiner is the Master Client then load a room
        if (PhotonNetwork.IsMasterClient)
        {
            // Log it and load an arena
            Debug.LogFormat("OnPlayerEnteredRoom IsMasterClient {0}", PhotonNetwork.IsMasterClient);
            LoadArena();
        }
    }

    public override void OnPlayerLeftRoom(Player other)
    {
        // Log that a player has left
        Debug.LogFormat("OnPlayerLeftRoom() {0}", other.NickName);

        // If we are the master check if we need to reload the Arena
        if (PhotonNetwork.IsMasterClient)
        {
            // Log and load arena
            Debug.LogFormat("OnPlayerLeftRoom IsMasterClient {0}", PhotonNetwork.IsMasterClient);
            LoadArena();
        }
    }


}
