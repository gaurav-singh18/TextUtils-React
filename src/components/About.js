import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const darkMode = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas,
          nobis beatae fugit laborum vitae repellendus adipisci quasi debitis
          harum, possimus ullam a? Nam, repudiandae enim quas porro voluptatum
          doloribus.
        </p>
      </div>
      <div className="container">
        <button onClick={darkMode} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </>
  );
}
