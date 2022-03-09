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

  const removepunc = () => {
    let newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"]/g, "");
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
    console.log("copy working");
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
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleonChange}
            value={text}
            id="MyBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#d4d4d4",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>

        <div class="alert alert-info" role="alert">
          <button
            className="btn btn-success mx-1 my-1"
            onClick={handleclearclick}
          >
            Clear Text
          </button>
          <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
        <div class="alert alert-warning" role="alert">
          <span>
            <b>Change Cases : </b>
          </span>
          <button className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
            Upper Case
          </button>

          <button className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
            Lower Case
          </button>

          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleSwapclick}
          >
            Swap Case
          </button>
        </div>

        <div class="alert alert-success" role="alert">
          <span>
            <b>Miscellaneous : </b>
          </span>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraline}
          >
            New Line Remover
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={removepunc}>
            Remove Punctuation
          </button>
        </div>

        <div class="alert alert-primary" role="alert">
          <span>
            <b>Others : </b>
          </span>
          <button className="btn btn-primary mx-1 my-1" onClick={isalpha}>
            isAlpha([a-z][A-z])
          </button>
          <button className="btn btn-light mx-1 my-1" onClick={isdigit}>
            <strong>Is Digit</strong> 
          </button>

          <input
            type="checkbox"
            className="btn-check my-1 mx-1"
            id="btn-check-outlined"
            autocomplete="off"
            onClick={isdigit}
          />
          <label class="btn btn-outline-success" for="btn-check-outlined">
          <strong>Is Digit</strong> 
          </label>
        </div>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary : </h2>
        <p>
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          mins read time
        </p>

        <h2>Preview : </h2>
        <p>
          {text === ""
            ? "Enter something in the text box above to preview it here"
            : text}
        </p>
      </div>
    </>
  );
}
