using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

using Photon.Pun;


public class ExitGrabInteractible : XRGrabInteractable
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    protected override void OnSelectEntered(XRBaseInteractor interactor)
    {
        base.OnSelectEntered(interactor);
        Debug.Log("Left");
        Application.Quit();
    }

    protected override void OnSelectEntering(XRBaseInteractor interactor)
    {
        base.OnSelectEntering(interactor);
        Debug.Log("Left");
        Application.Quit();
    }
}
