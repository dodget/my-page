import React from "react";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Fade,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";

export default function Work(props) {
  return (
    <Fade in={true}>
      <div>
        <Nav pills justified>
          <NavItem
            className={classnames({ active: props.activeTab === "1" })}
            onClick={() => {
              props.handleToggleWorkTab("1");
            }}
          >
            <NavLink>STARS</NavLink>
          </NavItem>
          <NavItem
            className={classnames({ active: props.activeTab === "2" })}
            onClick={() => {
              props.handleToggleWorkTab("2");
            }}
          >
            <NavLink>Benchmarking Tool</NavLink>
          </NavItem>
          <NavItem
            className={classnames({ active: props.activeTab === "3" })}
            onClick={() => {
              props.handleToggleWorkTab("3");
            }}
          >
            <NavLink>Resource Hub</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={props.activeTab}>
          <TabPane tabId="1">
            <Stars />
          </TabPane>
          <TabPane tabId="2">
            <BenchmarkingTool />
          </TabPane>
          <TabPane tabId="3">
            <Hub />
          </TabPane>
        </TabContent>
      </div>
    </Fade>
  );
}

function Stars(props) {
  return (
    <div>
      <Row>
        <h2>STARS</h2>
      </Row>
      <Col>
        <h4>About</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            The Sustainability Tracking, Assessment & Rating System{" "}
            <a href="https://stars.aashe.org">(STARS)</a> is a transparent,
            self-reporting framework for colleges and universities to measure
            their sustainability performance. It is one of the largest data
            collection and visualization efforts focused on institutional
            sustainability currently running.
          </p>
        </Col>
        <h4>Tech</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            <strong>Backend:</strong> Python/Django, MySQL.
          </p>
          <p>
            <strong>Frontend:</strong> Django templating, Javascript, jQuery,
            Bootstrap 2.
          </p>
          <p>
            <strong>Testing:</strong> Unit testing, end to end with Selenium.
          </p>
        </Col>
        <h4>My work</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            I came to begin work on STARS after it had reach full maturity with
            a dedicated userbase. My first real project on STARS was to get a
            stable branch with a passing test suite with good test coverage.
            That project took many months, but is complete. It was an excellent
            primer for learning the codebase, and develop my unit testing
            skills.
          </p>
          <p>
            Currently, my major focus is to continue reducing technical debt by
            bringin STARS from Django 1.4 and Python 2, to Django 2.1 and Python
            3. Along this path, I fully expect to cull legacy code and introduce
            SQL query optimizations.
          </p>
          <p>
            By the end of 2019, I would like to have completed the technical
            debt reduction project, so that STARS can be easily maintained in
            the future. In addition, I would like to implement contemporary
            tools on the frontend to give our users a responsive experience.
          </p>
        </Col>
      </Col>
    </div>
  );
}

function BenchmarkingTool(props) {
  return (
    <div>
      <Row>
        <h2>Benchmarking Tool</h2>
      </Row>
      <Col>
        <h4>About</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            The STARS{" "}
            <a href="https://benchmarks.aashe.org">Benchmarking Tool</a> allows
            users to compare institutions based on the scores and metrics
            reported to STARS. This project is open source, and split over the{" "}
            <a href="https://github.com/AASHE/bt">frontend</a>, and{" "}
            <a href="https://github.com/AASHE/bt-backend">backend</a>{" "}
            repositories.
          </p>
        </Col>
        <h4>Tech</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            <strong>Backend:</strong> Python/Django, Django Rest Framework,
            PostgreSQL.
          </p>
          <p>
            <strong>Frontend:</strong> React, Redux, Material-UI, Recharts.
          </p>
          <p>
            <strong>Testing:</strong> Unit testing with unittest, Jest and
            Enzyme.
          </p>
        </Col>
        <h4>My work</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            As one of two primary developers of the Benchmarking Tool, I gained
            a lot of experience during this project. From debugging Extract
            Transfer and Load processes, to fine-tuning a Material Design user
            experience, there was a lot to learn.
          </p>
          <p>
            Initially, my focus was on adding dashboard functionality. This then
            expanded to allowing users to save, edit, share and load benchmarks,
            creating a repository type experience for users, rather than only
            allowing them to create one-time visualizations.
          </p>
          <p>
            Since becoming the sole maintainer of the project, my focus now
            covers nearly all aspects of the tool. Moving forward, I realize
            there were some incorrect assumptions that lead to unsatisfactory
            test coverage of the frontend. Improving test coverage will be the
            next major initiative.
          </p>
        </Col>
      </Col>
    </div>
  );
}

function Hub(props) {
  return (
    <div>
      <Row>
        <h2>AASHE Resource Hub</h2>
      </Row>
      <Col>
        <h4>About</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            The <a href="https://hub.aashe.org/">Hub</a> is an online resource
            library that connect users with thousands of resources covering a
            wide range of topics. Resources are organized by Sustainability
            Topic, or Content Type.
          </p>
        </Col>
        <h4>Tech</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            <strong>Backend:</strong> Python/Django, PostgreSQL.
          </p>
          <p>
            <strong>Frontend:</strong> Django templating, Javascript, jQuery,
            Bootstrap 3.
          </p>
          <p>
            <strong>Testing:</strong> Unit testing with unittest, and end to end
            with Selenium.
          </p>
        </Col>
        <h4>My work</h4>
        <Col sm={{ size: "auto", offset: 1 }}>
          <p>
            Like STARS, I came onto this project after principal development was
            completed, and there was a dedicated userbase. My main role has
            focused around fixing bugs, and adding features.
          </p>
          <p>
            The Hub was the first project in production using Django that I had
            a chance to work on professionally. It was designed and built with
            maintainability in mind, and to that end, it was a great project to
            learn on.
          </p>
          <p>
            Moving forward the major project for the Hub is to increase daily
            active users, and increase the number of users that are submitting
            resources. One idea that has floated around is gamification, which
            would be an interesting challenge.
          </p>
        </Col>
      </Col>
    </div>
  );
}
