import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
  };

  let fontStyle = {
    fontWeight: "bold",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    fontSize: "20px",
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
              <strong>TextUtils </strong>
              is a collection of simple, free and easy to use text processing
              utilities. It helps to search and replace, add text, change cases,
              and perform other common tasks with manipulating text. There are
              no intrusive ads, popups or other garbage. Just text utilities
              that work right in your browser. Load text and instantly get
              result!
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
                <li>
                  <strong>Analyze your text </strong>{" "}
                  <div>
                    Textutils gives you a way to analyze your text quickly and
                    efficiently. Be it word count, character count or anything.{" "}
                  </div>
                </li>

                <li>
                  <strong>Free to use</strong>
                  <div>
                    Textutils is a free character counter tool that provides
                    instant character count & word count statistics for a given
                    text. Textutils reports the number of words and characters.
                    Thus it is suitable for writing text with word/ character
                    limit.
                  </div>
                </li>

                <li>
                  <strong>Browser Compatible</strong>
                  <div>
                    TextUtil works in any web browsers such as Chrome, Firefox,
                    Internet Explorer, Safari, Opera. It suits to count
                    characters in facebook, blog, books, excel document, pdf
                    document, essays, etc.
                  </div>
                </li>
                <div className="my-3">
                  <center>
                    <strong>Proudly made in INDIA ❤️</strong>
                  </center>
                </div>
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
              <span style={fontStyle}>
                Anurag Singh<strong></strong>
              </span>
              <div>Phone : +91-7004933850</div>
              <span>Email : <a href="1928216@kiit.ac.in">1928216@kiit.ac.in</a></span>
              <ul>
                <li className="my-2">
                  Pre-Final Year B.Tech CSSE Student, Volunteering at NSS & Community
                  Member at The Education tree. Also, Member & Learner at KIIT
                  Robotics Society.
                </li>
                <li className="my-2">
                  Head Boy (2018) and Dy. Discipline I/C (2017) in 10+2 (DAV
                  KAPILDEV).
                </li>
                <li className="my-2">
                  Sound knowledge in{" "}
                  <strong>
                    Web development (Front End), UI/UX (Adobe XD), Python,SQL,
                    C, C++, Java, and beginner in ML, Django, and robotics.
                  </strong>
                </li>
                <li className="my-2">
                  Innovative & forward-thinker. Expert in strategic and tactical
                  planning, & client relationship management.
                </li>
                <div className="my-4" style={{textAlign : "center"}}><strong>
                  <a href="https://anurag0310.netlify.app/">anurag0310.netlify.app</a>
                  </strong>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
