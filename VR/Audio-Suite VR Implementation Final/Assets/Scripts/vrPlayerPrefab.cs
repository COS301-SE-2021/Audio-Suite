using UnityEngine;
using UnityEngine.XR;

using Photon.Pun;

public class vrPlayerPrefab : MonoBehaviourPunCallbacks
{
    #region Variables

    /// <summary>
    /// The Variables of the the VR headset
    /// </summary>
    public Transform head;
    public Transform leftHand;
    public Transform rightHand;

    #endregion

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (photonView.IsMine)
        {
            mapPosition(head, XRNode.Head);
            mapPosition(leftHand, XRNode.LeftHand);
            mapPosition(rightHand, XRNode.RightHand);
        }
    }

    void mapPosition(Transform target, XRNode node)
    {
        InputDevices.GetDeviceAtXRNode(node).TryGetFeatureValue(CommonUsages.devicePosition, out Vector3 position);
        InputDevices.GetDeviceAtXRNode(node).TryGetFeatureValue(CommonUsages.deviceRotation, out Quaternion rotation);

        target.position = position;
        target.rotation = rotation;
    }
}
