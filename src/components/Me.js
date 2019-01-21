import React from "react";
import { Fade } from "reactstrap";

export default function Me(props) {
  return (
    <Fade in={true}>
      <h1>Welcome</h1>
      <p>
        My name is Tylor Dodge. I am a Web Applications Developer with The
        Association for the Advancement of Sustainability in Higher Education (
        <a href="https://www.aashe.org">AASHE</a>
        ). At AASHE, we work up and down the stack, and we are never too devoted
        to any single tool. We most often rely on Python/Django for our backend
        work and Javascript/React for the frontend. Also, we work from home,
        which is rad.
      </p>
      <p>
        I am currently living in Somerville, MA, but that is subject to change.
        Sooner or later I'll be in greener pastures (literally), with enough
        room for a hobby garden.
      </p>
      <p>
        I mainly enjoy building and fixing things. I grew up in a family of
        woodworkers, and I've done it professionally since childhood. It's still
        a side-gig for me. That experience translates a lot into my web
        development. From style recognition, tool mastery, efficient work
        pacing, to thinking outside the box to bring things to life that have
        only existed in the imaginations of a few people, it's very similar.
      </p>
      <p>
        Anywho, enjoy the site, and learn a little more about things I think are
        important.
      </p>
    </Fade>
  );
}
