import React from "react";
import TabsComponent from "./TabsComponent";
import { Container } from "react-bootstrap";

const Landing = () => {
  return (
    <div
      className="landing-container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container main-box">
        <h2 className="dhiwise-label text-center my-5">What is DhiWise?</h2>
        <p className="dhiwise-content text-center landing-content">
          DhiWise is a programming platform where developers can convert their
          designs into developer-friendly code for mobile and web apps. DhiWise
          automates the application development lifecycle and instantly
          generates readable, modular and reusable code.
        </p>
        <Container>
          <TabsComponent />
        </Container>
      </div>
    </div>
  );
};

export default Landing;
