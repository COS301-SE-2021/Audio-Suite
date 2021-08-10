using System.Collections;

using UnityEngine;
using UnityEngine.UI;

public class PlayerUI : MonoBehaviour
{
    // Variables
    [SerializeField]
    private Text playerNameText;

    [SerializeField]
    private Slider playerHealthSlider;

    [SerializeField]
    private Vector3 screenOffset = new Vector3(0f, 30f, 0f);

    private PlayerManager target;
    float characterControllerHeight = 0f;
    Transform targetTransform;
    Renderer targetRenderer;
    CanvasGroup _canvasGroup;
    Vector3 targetPosition;

    public void SetTarget(PlayerManager _target)
    {
        // Break if we dont have a target
        if (_target == null)
        {
            Debug.LogError("<Color=Red><a>Missing</a></Color> PlayMakerManager target for PlayerUI.SetTarget.", this);
            return;
        }

        // Cache value for easy finding for networking
        target = _target;
        if (playerNameText != null)
        {
            playerNameText.text = target.photonView.Owner.NickName;
        }

        targetTransform = this.target.GetComponent<Transform>();
        targetRenderer = this.target.GetComponent<Renderer>();
        CharacterController characterController = _target.GetComponent<CharacterController>();

        // Store a value that will never change
        if (characterController != null)
        {
            characterControllerHeight = characterController.height;
        }
    }

    void LateUpdate()
    {
        if (targetRenderer != null)
        {
            this._canvasGroup.alpha = targetRenderer.isVisible ? 1f : 0f;
        }

        if (targetTransform != null)
        {
            targetPosition = targetTransform.position;
            targetPosition.y += characterControllerHeight;
            this.transform.position = Camera.main.WorldToScreenPoint(targetPosition) + screenOffset;
        }
    }

    void Awake()
    {
        this.transform.SetParent(GameObject.Find("Canvas").GetComponent<Transform>(), false);
        _canvasGroup = this.GetComponent<CanvasGroup>();
    }

    // Update is called once per frame
    void Update()
    {
        if (playerHealthSlider != null)
        {
            playerHealthSlider.value = target.Health;
        }

        if (target == null)
        {
            Destroy(this.gameObject);
            return;
        }

    }
}
