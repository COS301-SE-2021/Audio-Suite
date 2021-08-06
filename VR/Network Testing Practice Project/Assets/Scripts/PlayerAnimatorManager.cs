using Photon.Pun;

using System.Collections;

using UnityEngine;

public class PlayerAnimatorManager : MonoBehaviourPun
{
    // Variables
    private Animator animator;

    [SerializeField]
    private float directionDampTime = 0.25f;

    // Start is called before the first frame update
    void Start()
    {
        // Get the animator component
        animator = GetComponent<Animator>();

        // If we cannot find it then we log the error
        if (!animator)
        {
            Debug.Log("No animator found");
        }
    }

    // Update is called once per frame
    void Update()
    {
        // Check which view is controlling this character
        if(photonView.IsMine == false && PhotonNetwork.IsConnected == true)
        {
            return;
        }

        // Check that there is still an animator
        if (!animator)
        {
            return;
        }

        // Jumping
        AnimatorStateInfo stateInfo = animator.GetCurrentAnimatorStateInfo(0);
        if (stateInfo.IsName("Base Layer.Run"))
        {
            if (Input.GetButtonDown("Fire2"))
            {
                animator.SetTrigger("Jump");
            }
        }

        // Grab the inputs and pass the values to the animator
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");

        // Pass the values to the animator
        animator.SetFloat("Speed", h * h + v * v);
        animator.SetFloat("Direction", h, directionDampTime, Time.deltaTime);


    }
}
