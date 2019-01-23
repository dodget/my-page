import React, { Component } from "react";
import { Nav, NavItem, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faUniversalAccess,
  faLeaf,
  faAt
} from "@fortawesome/free-solid-svg-icons";

import Me from "./components/Me";
import Access from "./components/Access";
import Ethos from "./components/Ethos";
import Contact from "./components/Contact";
import Work from "./components/Work";
import BackgroundVideo from "./components/BackgroundVideo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      activeTab: "1"
    };
  }

  handleToggleContent = (event, content) => {
    event.stopPropagation();
    if (this.state.content !== content) {
      this.setState({ content });
    } else {
      this.setState({ content: "" });
    }
  };

  handleToggleWorkTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  getClass = type => {
    if (type === this.state.content) {
      return "clicked";
    }
    return "icon";
  };

  render() {
    const types = [
      ["me", faUser, "About me."],
      ["work", faCode, "My work."],
      ["access", faUniversalAccess, "Web accessibility."],
      ["ethos", faLeaf, "My ethos."],
      ["contact", faAt, "Contact me."]
    ];

    let cont =
      this.state.content === "access" ? (
        <Access />
      ) : this.state.content === "me" ? (
        <Me />
      ) : this.state.content === "ethos" ? (
        <Ethos />
      ) : this.state.content === "work" ? (
        <Work
          handleToggleWorkTab={this.handleToggleWorkTab}
          activeTab={this.state.activeTab}
        />
      ) : this.state.content === "contact" ? (
        <Contact />
      ) : (
        <BackgroundVideo />
      );

    return (
      <div>
        <Row>
          <Col xs="2" sm="2" md="1">
            <Nav vertical fill className="side-nav">
              {types.map(t => {
                let icon = t[0] === this.state.content ? "clicked" : "icon";
                let divType =
                  t[0] === this.state.content ? "nav-div-clicked" : "nav-div";
                return (
                  <NavItem key={t[0]}>
                    <div
                      className={divType}
                      onClick={e => this.handleToggleContent(e, t[0])}
                      tabIndex="0"
                    >
                      <FontAwesomeIcon
                        icon={t[1]}
                        className={icon}
                        title={t[2]}
                      />
                    </div>
                  </NavItem>
                );
              })}
            </Nav>
          </Col>
          <Col xs="10">
            <Container>
              <Col
                sm="11"
                md={{ size: 9, offset: 1 }}
                className="content-block"
              >
                {cont}
              </Col>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
