using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;

public class PlayerMovementScript : MonoBehaviour
{
    public CharacterController controller;
    public float speed = 12f;
    private PhotonView photonView;

    // Called on script start
    void Start()
    {
        photonView = GetComponent<PhotonView>();
    }

    // Update is called once per frame
    void Update()
    {
        if (photonView.IsMine)
        {
            float x = Input.GetAxis("Horizontal");
            float z = Input.GetAxis("Vertical");

            Vector3 move = transform.right * x + transform.forward * z;

            controller.Move(move * speed * Time.deltaTime);

        }
        
    }

}
