import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Head from "./head";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
