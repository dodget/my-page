import React from "react";
import { Fade } from "reactstrap";

export default function Ethos(props) {
  return (
    <Fade in={true}>
      <h1>Ethos</h1>
      <div className="ethos-block">
        <p>Recognize privilege.</p>
        <p>Help friends.</p>
        <p>Welcome the stranger.</p>
        <p>Take only what you need.</p>
        <p>Eat food; mostly vegetables.</p>
        <p>
          There are some things that you need to fly for, and some things you
          don't.
        </p>
        <p>Don't take anything too seriously.</p>
      </div>
    </Fade>
  );
}
