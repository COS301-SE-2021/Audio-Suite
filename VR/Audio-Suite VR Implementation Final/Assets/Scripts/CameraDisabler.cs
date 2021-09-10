using UnityEngine;

using Photon.Pun;

/// <summary>
/// Disable the camera to allow smooth audio
/// </summary>
public class CameraDisabler : MonoBehaviourPunCallbacks
{
    #region Variables

    [SerializeField] private Camera camera;

    #endregion

    /// <summary>
    /// When the program starts disable the camera if it is not the current users
    /// </summary>
    void Start()
    {
        if (!photonView.IsMine)
        {
            camera.GetComponent<AudioListener>().enabled = false;
        }
    }
}
