import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
