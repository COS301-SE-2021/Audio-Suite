using System.Collections;
using System.Collections.Generic;

using UnityEngine;

using Photon.Pun;

/// <summary>
/// The class resposible for handling all user management
/// </summary>
public class UserManager : MonoBehaviourPunCallbacks
{
    #region Variables

    /// <summary>
    /// Static variable used to cache if the local player has been created yet. 
    /// </summary>
    public static GameObject LocalPlayerInstance;

    #endregion

    #region Functions

    /// <summary>
    /// When the program starts if we are currently the owner of the view create an instance of the object for loading and unloading levels.
    /// </summary>
    void Start()
    {
        // If we own the view create the local player and dont allow it to be destroyed through loads
        if (photonView.IsMine)
        {
            UserManager.LocalPlayerInstance = this.gameObject;
        }
        DontDestroyOnLoad(this.gameObject);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    #endregion
}
