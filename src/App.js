import "./App.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UserStory from "./UserStory";
import { useState } from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import * as React from "react";
import Title from "./Title";

const IMAGE_ID = "UserStoryImage";

function App() {
  const [asText, setAsText] = useState("");
  const [wantText, setWantText] = useState("");
  const [thatText, setThatText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    saveSvgAsPng(document.getElementById(IMAGE_ID), "UserStory.png").then(
      () => {
        setIsLoading(false);
      }
    );
  }

  return (
    <Container fluid={true} className={"md-min-vh-100"}>
      <Row className={"h-100"}>
        <Col md={4} lg={3} className={"sidebar-bg pt-2"}>
          <Form onSubmit={onSubmit}>
            <Title className={"d-none d-md-block"} />
            <Form.Group controlId="formAsA">
              <Form.Label>As a...</Form.Label>
              <Form.Control
                type="text"
                value={asText}
                onChange={(e) => setAsText(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formIWantTo">
              <Form.Label>I want to...</Form.Label>
              <Form.Control
                type="text"
                value={wantText}
                onChange={(e) => setWantText(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formSoThat">
              <Form.Label>So that...</Form.Label>
              <Form.Control
                type="text"
                value={thatText}
                onChange={(e) => setThatText(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type={"submit"}
              className={"float-right"}
              disabled={isLoading}
            >
              {isLoading && (
                <>
                  <span
                    className="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only mr-2">Loading...</span>
                </>
              )}
              Download
            </Button>
          </Form>
        </Col>
        <Col md={8} lg={9} className={"pt-2 order-first order-md-last"}>
          <Title className={"d-md-none"} />
          <UserStory
            astext={asText}
            wanttext={wantText}
            thattext={thatText}
            id={IMAGE_ID}
            className={"mt-3 img-thumbnail"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
