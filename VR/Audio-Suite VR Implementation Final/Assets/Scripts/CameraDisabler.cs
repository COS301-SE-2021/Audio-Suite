using UnityEngine;

using Photon.Pun;

/// <summary>
/// Disable the camera to allow smooth audio
/// </summary>
public class CameraDisabler : MonoBehaviourPunCallbacks
{
    #region Variables

    [SerializeField] private Camera camera;

    public GameObject XRInteraction;
    public GameObject XRRig;
    public GameObject inputManager;

    #endregion

    /// <summary>
    /// When the program starts disable the camera if it is not the current users
    /// </summary>
    void Start()
    {
        if (!photonView.IsMine)
        {
            camera.enabled = false;
            camera.GetComponent<AudioListener>().enabled = false;

            XRInteraction.SetActive(false);
            XRRig.SetActive(false);
            inputManager.SetActive(false);
        }

    }
}
