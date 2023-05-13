import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    // console.log("text field clicked");
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
