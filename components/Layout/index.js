import React, { useState } from "react";
import Router from "next/router";
import nProgress from "nprogress";
import Navbar from "./Navbar";
import Footer from "./Footer";

Router.onRouteChangeStart = (url) => nProgress.start();
Router.onRouteChangeComplete = (url) => nProgress.done();
Router.onRouteChangeError = (url) => nProgress.done();

const Layout = ({ children }) => {
  return (
    <>
      <div className="select-none">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="md:mt-9 -mt-10 max-w-screen">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
