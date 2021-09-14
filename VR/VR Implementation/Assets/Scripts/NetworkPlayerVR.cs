using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

using Photon.Pun;

public class NetworkPlayerVR : MonoBehaviour
{
    #region Variables

    public Transform head;
    public Transform leftHand;
    public Transform rightHand;

    private PhotonView photonView;

    private Transform headRig;
    private Transform leftHandRig;
    private Transform rightHandRig;

    #endregion 

    // Start is called before the first frame update
    void Start()
    {
        photonView = GetComponent<PhotonView>();
        XRRig rig = FindObjectOfType<XRRig>();
        headRig = rig.transform.Find("Camera Offset/Main Camera");
        leftHandRig = rig.transform.Find("Camera Offset/LeftHand Controller");
        rightHandRig = rig.transform.Find("Camera Offset/RightHand Controller");

        if (photonView.IsMine)
        {
            foreach (var item in GetComponentsInChildren<Renderer>())
            {
                item.enabled = false;
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        if (photonView.IsMine)
        {
            MapPositions(head, headRig);
            MapPositions(leftHand, leftHandRig);
            MapPositions(rightHand, rightHandRig);
        }
    }

    void MapPositions(Transform target, Transform transformRig)
    {
        target.position = transformRig.position;
        target.rotation = transformRig.rotation;
    }
}
