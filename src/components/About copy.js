import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btntext, setBtnText] = useState("Disable Dark Mode");
  const [btndesign, setBtndesign] = useState("btn btn-secondary");

  const toggleStyle = () => {
    if ((myStyle.color === "white")) {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
      setBtndesign("btn btn-secondary")
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        border: '1px solid white',
      });
      setBtnText("Disable Dark Mode");
      setBtndesign("btn btn-success")
    }
  };
  return (
    <div className="container my-4" style={myStyle}>
      <h3 className="my-3">About Us</h3>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextUtils 🖊️
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> 
              is a collection of simple, free and easy to use text processing utilities. It  helps to search and replace, add text, change cases, and perform other common tasks with manipulating text. There are no intrusive ads, popups or other garbage. Just text utilities that work right in your browser.  Load text and instantly get result!

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed "
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why TextUtil? 🧩
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li><strong>Analyze your text</strong> <div> Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or </div></li>
                
                <li><strong>Free to use</strong><div>Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</div></li>

                <li><strong>Browser Compatible</strong><div>TextUtil works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div></li>
                <div className="my-3"><center>Last but not the least <strong>Proudly made in INDIA ❤️</strong></center></div>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              About the Developer 👨‍💻
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button
          className={btndesign}
          onClick={toggleStyle}
          type="button"
        >
          {btntext}
        </button>
      </div>
    </div>
  );
}
