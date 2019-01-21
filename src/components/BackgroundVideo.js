import React from "react";
import { Col, Fade } from "reactstrap";

export default function BackgroundVideo(props) {
  let today = new Date(Date.now());
  let month = today.getMonth() + 1;
  let day = today.getDate();

  let season;
  let video;
  let vidTitle;
  if (
    (month === 3 && day > 20) ||
    (month > 3 && month < 6) ||
    (month === 6 && day < 21)
  ) {
    season = "spring";
    video = require("../assets/Purple_And_White_Flowers.mp4");
    vidTitle = "Video of spring flowers.";
  } else if (
    (month === 6 && day >= 21) ||
    (month > 6 && month < 9) ||
    (month === 9 && day < 22)
  ) {
    season = "summer";
    video = require("../assets/Grass_and_Flowers.mp4");
    vidTitle = "Video of summer grasses.";
  } else if (
    (month === 9 && day >= 22) ||
    (month > 9 && month < 12) ||
    (month === 12 && day < 21)
  ) {
    season = "fall";
    video = require("../assets/fall_tree.mp4");
    vidTitle = "Video of automn leaves on a tree.";
  } else {
    season = "winter";
    video = require("../assets/winter_trim.mp4");
    vidTitle = "Video of snow covered branched in winter.";
  }

  return (
    <div>
      <Fade>
        <video title={vidTitle} id="background-video" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Col md={{ size: "auto", offset: 8 }}>
          <div className="greeting">
            <h2>Enjoy {season}.</h2>
          </div>
        </Col>
      </Fade>
    </div>
  );
}
