import React from "react";
import styled from "styled-components";

const LoginModal = ({ isVisible, onSetIsVisible }) => {
  const BackgroundDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(80, 80, 80, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: ${isVisible ? "blakc" : "none"};
    z-index: 1000;
  `;

  const StyledDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    .logo-area {
      display: block;
      padding-bottom: 2rem;
      text-align: center;
      font-weight: bold;
      letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 360px;
    border-radius: 2px;
  `;

  return (
    <BackgroundDiv
      isVisible={isVisible}
      onClick={() => {
        onSetIsVisible(false);
      }}
    >
      <StyledDiv>
        <div className="logo-area">로그인</div>
      </StyledDiv>
      .
    </BackgroundDiv>
  );
};

export default LoginModal;
