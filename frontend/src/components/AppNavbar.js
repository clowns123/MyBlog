import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import styled from "styled-components";

const AppNavbar = () => {
  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
  `;

  const StyledNavbar = styled(Navbar)`
    position: sticky;
    top: 0;
  `;

  const StyledNav = styled(Nav)`
    margin-left: auto;
    display: flex;
    justify-content: space-around;
  `;

  return (
    <>
      <StyledNavbar expand="lg" color="dark" dark>
        <Container>
          <StyledLink to="/">Side Project Blog 나만의 블로그</StyledLink>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <StyledNav>
              {false ? (
                <h1 className="text-white">authLink</h1>
              ) : (
                <h1 className="text-white">guestLink</h1>
              )}
            </StyledNav>
          </Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default AppNavbar;
