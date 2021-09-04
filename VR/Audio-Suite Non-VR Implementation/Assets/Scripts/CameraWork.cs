using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraWork : MonoBehaviour
{
    #region Variables

    #region Camera Work Varaibles

    /// <summary>
    /// The distance behind the target the camera is
    /// </summary>
    [SerializeField]
    private float distance = 0f;

    /// <summary>
    /// The height of the camera off the ground
    /// </summary>
    [SerializeField]
    private float height = 1.8f;

    /// <summary>
    /// The offset of the camera related to the object it is on
    /// </summary>
    [SerializeField]
    private Vector3 centerOffset = Vector3.zero;

    /// <summary>
    /// Check if the camera should follow the player on start
    /// </summary>
    [SerializeField]
    private bool followOnStart = false;

    /// <summary>
    /// How quickly the camera follows the target
    /// </summary>
    [SerializeField]
    private float smoothSpeed = 1f;

    /// <summary>
    /// Cache for the camera transform
    /// </summary>
    Transform cameraTransform;

    /// <summary>
    /// Flag for following state of the camera
    /// </summary>
    bool isFollowing;

    /// <summary>
    /// Cache for the camera offset
    /// </summary>
    Vector3 cameraOffset = Vector3.zero;

    #endregion

    #region Mouse Input Variables

    /// <summary>
    /// The mouse sensitivity of the player
    /// </summary>
    public float mouseSens = 100f;

    /// <summary>
    /// A player body for rotations
    /// </summary>
    public Transform playerBody;

    /// <summary>
    /// The rotation of the camera 
    /// </summary>
    float cameraRotation = 0f;

    #endregion

    #endregion

    #region Functions

    /// <summary>
    /// Check to see if the camera follows the player at start of script
    /// </summary>
    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
        if (followOnStart)
        {
            OnStartFollowing();
        }
    }

    /// <summary>
    /// Function to update the camera movement and transformations
    /// </summary>
    void LateUpdate()
    {
        // Since we switch scenes it is important to call the follow command if the scene gets switched
        if (cameraTransform == null && isFollowing)
        {
            OnStartFollowing();
        }

        // Follow target if flag is set
        if (isFollowing)
        {
            Follow();
        }
        
    }

    /// <summary>
    /// Function to be called by the network for instansiation. It lifts the flag for the camera to follow the target 
    /// </summary>
    private void OnStartFollowing()
    {
        // Raise flag and cache the current transform
        isFollowing = true;
        cameraTransform = Camera.main.transform;

        // Cut to starting location
        Cut();
    }

    /// <summary>
    /// Move the camera to the starting location without smoothing.
    /// </summary>
    private void Cut()
    {
        // Set the camera's offsets
        cameraOffset.z = -distance;
        cameraOffset.y = height;

        // Move the camera and set what it looks at
        cameraTransform.position = this.transform.position + this.transform.TransformVector(cameraOffset);
        cameraTransform.LookAt(this.transform.position + centerOffset);
    }

    /// <summary>
    /// Continious function that has the camera follow the target. It also provides mouse movement for looking around.
    /// </summary>
    private void Follow()
    {
        // Set the camera's offsets
        cameraOffset.z = -distance;
        cameraOffset.y = height;

        // Move the camera to the right positions 
        cameraTransform.position = Vector3.Lerp(cameraTransform.position, this.transform.position + this.transform.TransformVector(cameraOffset), smoothSpeed * Time.deltaTime);

        // Get the input from the mouse
        float mouseX = Input.GetAxis("Mouse X") * mouseSens * Time.deltaTime;
        float mouseY = Input.GetAxis("Mouse Y") * mouseSens * Time.deltaTime;

        // Set the rotation of the player body and clamp the rotations
        cameraRotation -= mouseY;
        cameraRotation = Mathf.Clamp(cameraRotation, -90f, 90f);

        // Transform the players body and camera
        playerBody.Rotate(Vector3.up * mouseX);
        cameraTransform.LookAt(this.transform.forward + new Vector3(cameraRotation, 0f, 0f));
        //cameraTransform.localRotation = Quaternion.Euler(cameraRotation, 0f, 0f);
    }

    #endregion
}
