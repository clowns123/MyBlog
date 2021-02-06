import React from "react";
import { Col, Row } from "reactstrap";
import "../assets/css/Header.scss";
import styled from "styled-components";
import "../assets/css/Header.scss";

const Header = () => {
  const StyledCol = styled(Col)`
    text-align: center;
    margin: auto;
  `;

  return (
    <div id="page-header">
      <Row>
        <StyledCol md="6" sm="auto">
          <h1>나의 블로그입니다.</h1>
          <p>공부한 것 들을 적어봅시다.</p>
        </StyledCol>
      </Row>
    </div>
  );
};

export default Header;
