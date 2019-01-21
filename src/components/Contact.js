import React from "react";
import { Fade } from "reactstrap";

export default function Contact(props) {
  return (
    <Fade in={true}>
      <h1>Contact</h1>
      <p>You can follow/contact me in the following ways:</p>
      <p>
        <strong>Github</strong>:{" "}
        <a href="https://github.com/dodget">https://github.com/dodget</a>
      </p>
      <p>
        <strong>Email</strong>: tylor.dodge1@gmail.com
      </p>
      <p>Or...</p>
      <p>
        <strong>
          <a href="https://www.linkedin.com/in/tylor-dodge-841a66ba">
            Linkedin
          </a>
        </strong>
      </p>
    </Fade>
  );
}
