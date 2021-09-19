using System.Collections;
using System.Collections.Generic;

using UnityEngine;
using UnityEngine.SceneManagement;

using Photon.Pun;
using Photon.Realtime;

using System;

public class GameManager : MonoBehaviourPunCallbacks
{
    #region Variables

    /// <summary>
    /// An instance of the game manager for use in other classes
    /// </summary>
    public static GameManager Instance;

    /// <summary>
    /// The player prefab used for the playere to interact with the office space
    /// </summary>
    public GameObject playerPrefab;

    /// <summary>
    /// The player that is spawned when the scene 
    /// </summary>
    private GameObject spawnedPlayer;

    #endregion

    #region Functions

    /// <summary>
    /// When the scene is loaded the we need to create the manager object for use in other parts of the code
    /// we also need to get the name of the user and save it to the Photon network for later use
    /// 
    /// TODO: 
    /// Get name from API
    /// </summary>
    void Start()
    {
        // Create the instance
        Instance = this;

        // Make sure that there is a character to spawn
        if (playerPrefab == null)
        {
            Debug.LogError("No Prefab Selected");
        }
        else
        {
            // Get the number of users currently in the room
            int userInRoom = PhotonNetwork.CurrentRoom.PlayerCount;

            // Spawn player prefab
            spawnedPlayer = PhotonNetwork.Instantiate("Network Player VR", new Vector3(0f, 0f, 0f), Quaternion.identity, 0);

        }
    }

    /// <summary>
    /// When a new user joins the room try and load a new office
    /// </summary>
    /// <param name="newPlayer">The new player joining the room</param>
    public override void OnPlayerEnteredRoom(Player newPlayer)
    {
        Debug.LogFormat("The user {0} has joined the room", newPlayer);

        // Make sure that only one user calls the loading of the new room
        if (PhotonNetwork.IsMasterClient)
        {
            loadOffices();
        }
    }

    /// <summary>
    /// When a player leaves the room try and load a new level
    /// </summary>
    /// <param name="otherPlayer">The player that has just left the room</param>
    public override void OnPlayerLeftRoom(Player otherPlayer)
    {
        Debug.LogFormat("The user {0} has left the room", otherPlayer);

        // Make sure that only one user calls the loading of the new room
        if (PhotonNetwork.IsMasterClient)
        {
            loadOffices();
        }
    }

    /// <summary>
    /// Function called by leave room button
    /// </summary>
    public void LeaveRoom()
    {
        PhotonNetwork.LeaveRoom();
    }

    /// <summary>
    /// When the user has left the room close the application
    /// </summary>
    public override void OnLeftRoom()
    {
        PhotonNetwork.Destroy(spawnedPlayer);
        Application.Quit();
    }

    /// <summary>
    /// The function to change the scene the users are currently on. This is dependant on the amount of users currently in the rooms.
    /// 
    /// TODO: 
    ///     Check what happens when the person who created the room leaves and then another player joins. 
    ///     (testing the isMasterClient
    /// </summary>
    private void loadOffices()
    {
        // Get the number of users currently in the room
        int userInRoom = PhotonNetwork.CurrentRoom.PlayerCount;
    }

    #endregion
}
