using System.Collections;
using System.Collections.Generic;

using UnityEngine;

using Photon.Pun;

public class MouseMovement : MonoBehaviourPunCallbacks
{
    /// <summary>
    /// The mouse sense of the user 
    /// </summary>
    public float mouseSens = 100f;

    /// <summary>
    /// The player body to be transformed when looking around
    /// </summary>
    public Transform playerBody;

    /// <summary>
    /// The rotation of the camera
    /// </summary>
    float xRotation = 0f;

    /// <summary>
    /// Lock the cursor on start.
    /// </summary>
    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
    }

    /// <summary>
    /// Check each frame for mouse movements and move the camera
    /// </summary>
    void Update()
    {
        if (photonView.IsMine)
        {
            float mouseX = Input.GetAxis("Mouse X") * mouseSens * Time.deltaTime;
            float mouseY = Input.GetAxis("Mouse Y") * mouseSens * Time.deltaTime;

            xRotation -= mouseY;
            xRotation = Mathf.Clamp(xRotation, -90f, 90f);

            transform.localRotation = Quaternion.Euler(xRotation, 0f, 0f);
            playerBody.Rotate(Vector3.up * mouseX);
        }
    }
}
