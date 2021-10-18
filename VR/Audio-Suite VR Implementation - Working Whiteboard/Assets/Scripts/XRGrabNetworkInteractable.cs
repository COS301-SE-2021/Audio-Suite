﻿using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

using Photon.Pun;

public class XRGrabNetworkInteractable : XRGrabInteractable
{
    private PhotonView photonView;

    // Start is called before the first frame update
    void Start()
    {
        photonView = GetComponent<PhotonView>();
    }

    protected override void OnSelectEntered(XRBaseInteractor interactor)
    {
        photonView.RequestOwnership();
        base.OnSelectEntered(interactor);
    }

    protected override void OnSelectEntering(XRBaseInteractor interactor)
    {
        photonView.RequestOwnership();
        base.OnSelectEntering(interactor);
    }
}