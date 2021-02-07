import React, { Fragment } from "react";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Router = () => {
  return (
    <>
      <AppNavbar />
      <Header />
      <h1>My Blog</h1>
      <Footer />
    </>
  );
};

export default Router;
