import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "./auth/LoginModal";
let auth = true;

const AppNavbar = () => {
  const StyledBg = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 10px 20px;
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
  `;

  const StyledLogin = styled.button`
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: rgb(52, 58, 64);
    color: white;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
  `;

  const [isVisible, setIsVisible] = useState(false);

  const onSetIsVisible = (active) => {
    setIsVisible(active);
  };

  return (
    <>
      <StyledBg>
        <LoginModal isVisible={isVisible} onSetIsVisible={onSetIsVisible} />
        <StyledLink to="/">CLOWN</StyledLink>
        {auth ? (
          <StyledLogin onClick={() => onSetIsVisible(true)}>로그인</StyledLogin>
        ) : (
          <div>로그인 완료</div>
        )}
      </StyledBg>
    </>
  );
};

export default AppNavbar;
