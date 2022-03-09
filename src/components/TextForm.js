import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("Uppercase clicked"+ text)
    let newText = text.toUpperCase();
    // alert("Uppercase clicked")
    setText(newText);
    props.showAlert("Converted to Upper Case !!", "success");
  };

  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case !!", "success");
  };

  let camelize = function camelize() {
    let newText= text.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
      setText(newText)
  }

  const titleCase=()=>{
    let newText= text.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    setText(newText)
  };


  const removepunc = () => {
    let newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_@`~()"]/g, "");
    var finalString = newText.replace(/\s{2,}/g, " ");
    setText(finalString);
    props.showAlert("Punctuation removed !!", "success");

    // var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
  };

  const isalpha = () => {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i].match(/([a-z]|[ ])/i)) count++;
    }
    if (text.length === count) props.showAlert("isAlpha : True", "success");
    else props.showAlert("isAlpha : False", "danger");
  };

  const spacebar = () => {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i].match(/([ ])/i)) count++;
    }
    props.showAlert(`Total Spaces ${count} !!`, "success");
    console.log(`Total Spaces ${count} !!`)
  }  

  const isIdentifier = () => {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i].match(/([a-z]|[0-9]|[ ]|[_])/i)) count++;
    }
    if (text.length === count) props.showAlert("is Identifier([a-z][A-z][0-9][_]) : True", "success");
    else props.showAlert("is Identifier([a-z][A-z][0-9][_]) : False", "danger");
  };

  const isalnum = () => {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i].match(/([a-z]|[0-9]|[ ])/i)) count++;
    }
    if (text.length === count) props.showAlert("is Al-Num([a-z][A-z][0-9]) : True", "success");
    else props.showAlert("is Al-Num([a-z][A-z][0-9]) : False", "danger");
  };

  let fontStyle={
    fontWeight: "bold",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    fontSize: "20px",
  }

  const isdigit = () => {
    let dig = parseInt(text);
    let st = Number.isInteger(dig);
    if (st === true) props.showAlert("isDigit : True", "success");
    else props.showAlert("isDigit : False", "danger");
  };

  const handleSwapclick = () => {
    let newText = "";
    for (var i = 0; i < text.length; i++) {
      if (text[i] === text[i].toLowerCase()) {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Converted to SWAP Case !!", "success");
  };

  const handleclearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text box cleared !!", "warning");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed !!", "success");
  };

  const handleExtraline = () => {
    let newText = text.replace(/(\r\n|\n|\r)/gm, "");
    setText(newText);
    props.showAlert("Extra line removed !!", "success");
  };

  const handleCopy = () => {
    // console.log("copy working");
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard !!", "warning");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <span className=" my-4" style={fontStyle}>{props.heading}</span>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleonChange}
            value={text}
            id="MyBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#f5f5f5",
              // color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>

        <div class="alert alert-dark" role="alert">
          <button
            className="btn btn-outline-primary mx-1 my-1" disabled={text.length===0}
            onClick={handleclearclick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-outline-primary mx-1 my-1" disabled={text.length===0}
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
        <div class="alert alert-info" role="alert">
          <span>
            <b>Change Cases : </b>
          </span>
          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={handleupclick}
          >
            Upper Case
          </button>

          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={handleloclick}
          >
            Lower Case
          </button>

          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={titleCase}
          >
            Title Case
          </button>

          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={camelize}
          >
            Camel Case
          </button>

          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={handleSwapclick}
          >
            Swap Case
          </button>
        </div>

        <div class="alert alert-warning" role="alert">
          <span>
            <b>Miscellaneous : </b>
          </span>
          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={handleExtraline}
          >
            New Line Remover
          </button>
          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={removepunc}
          >
            Remove Punctuation
          </button>
        </div>

        <div class="alert alert-primary" role="alert">
          <span>
            <b>Others : </b>
          </span>
          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={isalpha}
          >
            isAlpha([a-z][A-z])
          </button>

          <button
            className="btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={isalnum}
          >
            is Al-Num([a-z][A-z][0-9])
          </button>

          <button
            className="btn btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={isdigit}
          >
            Is Digit ([0-9])
          </button>

          <button
            className="btn btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={isIdentifier}
          >
            Is Identifier ([a-z][A-z][0-9][_])
          </button>

          <button
            className="btn btn btn-outline-success mx-1 my-1" disabled={text.length===0}
            onClick={spacebar}
          >
            Total Spaces
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="container alert alert-success" disabled={text.length===0}
            style={{ flex: "25%", marginRight: "7px" }}
            // style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            <span style={fontStyle}>Your text summary : </span>
            <p>
              <b>
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </b>{" "}
              words and <b>{text.length}</b> characters
            </p>
            <p>
              <b>
                {0.008 *
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length}
              </b>{" "}
              mins read time
            </p>
          </div>
          <div
            className="container alert alert-success "
            style={{ flex: "75%", marginLeft: "7px",overflow:'scroll',height:'15em',overflowX:'hidden' }}
          >
            <span style={fontStyle}>
              Preview :{" "}
            </span>
            <p>
              {text === ""
                ? "Enter something in the text box above to preview it here"
                : text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
