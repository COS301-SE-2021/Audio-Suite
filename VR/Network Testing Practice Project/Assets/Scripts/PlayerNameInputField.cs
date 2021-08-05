using System.Collections;
using System.Collections.Generic;

using UnityEngine;
using UnityEngine.UI;

using Photon.Pun;
using Photon.Realtime;

public class PlayerNameInputField : MonoBehaviour
{
    // Variables
    const string playerNamePrefKey = "Player Name";

    // Start is called before the first frame update
    void Start()
    {
        string defualtName = string.Empty;
        InputField _inputField = this.GetComponent<InputField>();

        // If the user doesnt have name
        if (_inputField != null)
        {
            if (PlayerPrefs.HasKey(playerNamePrefKey))
            {
                defualtName = PlayerPrefs.GetString(playerNamePrefKey);
            }
        }

        // Give the new name to the PhotonNetwork
        PhotonNetwork.NickName = defualtName;
    }

    // Sets the players name (capital because otherwise we will override an existing UI function)
    public void SetPlayerName(string value)
    {
        // only set the name if value is not empty
        if (string.IsNullOrEmpty(value))
        {
            Debug.LogError("Player's name is empty");
            return;
        }

        // Set the name on the network and store the value in the PlayerPrefs Lookup table
        PhotonNetwork.NickName = value;
        PlayerPrefs.SetString(playerNamePrefKey, value);
    }
}
