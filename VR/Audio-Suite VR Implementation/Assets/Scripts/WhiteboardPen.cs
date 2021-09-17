using UnityEngine;

using Photon.Pun;

public class WhiteboardPen : MonoBehaviour
{
    public Whiteboard whiteboard;
    public GameObject pen;

    private RaycastHit touch;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        float tipHeight = pen.transform.localScale.y;
        Vector3 tip = pen.transform.position;

        if (Physics.Raycast (tip, (-transform.up), out touch, 0.1f))
        {
            if(!(touch.collider.tag == "Whiteboard"))
            {
                return;
            }

            whiteboard = touch.collider.GetComponent<Whiteboard>();

            this.whiteboard.SetColor(Color.blue);
            this.whiteboard.SetTouchPosition(touch.textureCoord.x, touch.textureCoord.y);
            this.whiteboard.ToggleTouch(true);
        }
        else
        {
            this.whiteboard.ToggleTouch(false);
        }
    }
}
