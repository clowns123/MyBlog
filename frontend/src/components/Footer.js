import React from "react";
import { Col, Row } from "reactstrap";
import "../assets/css/Footer.scss";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <div id="main-footer">
      <Row>
        <Col>
          <p>
            Copyright $copy; <span>{thisYear()}</span>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
