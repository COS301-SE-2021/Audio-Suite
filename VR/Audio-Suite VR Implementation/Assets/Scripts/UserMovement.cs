using System.Collections;
using System.Collections.Generic;

using UnityEngine;

using Photon.Pun;

public class UserMovement : MonoBehaviourPunCallbacks
{
    #region Variables

    /// <summary>
    /// The controller for the character
    /// </summary>
    public CharacterController characterController;

    /// <summary>
    /// A value to mulitple movement by to controll the speed of the character
    /// </summary>
    public float speed = 12f;

    /// <summary>
    /// The camera of the user, it will be turned off during spawning.
    /// </summary>
    [SerializeField] new Camera camera;

    #endregion

    #region Functions

    void Start()
    {
        // Turn off the camera of all presets that aren't ours
        if (!photonView.IsMine)
        {
            camera.enabled = false;
        }
    }

    /// <summary>
    /// Function to move the character around 
    /// </summary>
    void Update()
    {
        if (photonView.IsMine)
        {
            // Get the inputs from the keyboard
            float x = Input.GetAxis("Horizontal");
            float z = Input.GetAxis("Vertical");

            // Create the vector and move the character
            Vector3 move = transform.right * x + transform.forward * z;
            characterController.Move(move * speed * Time.deltaTime);
        }
    }

    #endregion
}
