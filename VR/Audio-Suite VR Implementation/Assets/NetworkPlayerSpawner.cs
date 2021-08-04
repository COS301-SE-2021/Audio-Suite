using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;


public class NetworkPlayerSpawner : MonoBehaviourPunCallbacks
{
    // variables
    private GameObject spawnedPlayerPrefab;

    // Spawn player
    public override void OnJoinedRoom()
    {
        base.OnJoinedRoom();

        //create the spawnd player
        spawnedPlayerPrefab = PhotonNetwork.Instantiate("Network Player", transform.position, transform.rotation);
    }

    // Remove player
    public override void OnLeftRoom()
    {
        base.OnLeftRoom();

        // Destroy the spawned player
        PhotonNetwork.Destroy(spawnedPlayerPrefab);
    }
}
