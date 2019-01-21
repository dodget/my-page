import React from "react";
import { Fade } from "reactstrap";

export default function Access(props) {
  return (
    <Fade in={true}>
      <h1>Accessibility</h1>
      <p>
        The web is for all users. Discrimination in design is unacceptable.
        Looking back, while I was beginning to learn software development,
        accessibility was not a mandatory consideration before releasing an
        application.
      </p>
      <p>
        While I'm not perfect, I am committed to producing accessible
        applications moving forward, and improving legacy applications when
        possible.
      </p>
      <p>
        Please, see the W3C's{" "}
        <a href="https://www.w3.org/standards/webdesign/accessibility">
          guide to web accessibility
        </a>
        , and if you are a developer, commit to{" "}
        <a href="https://www.w3.org/WAI/fundamentals/accessibility-principles/">
          these principals
        </a>
        .
      </p>
    </Fade>
  );
}
