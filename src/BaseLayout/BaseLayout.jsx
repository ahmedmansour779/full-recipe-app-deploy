import React from "react";
import Footer from "../Footer/Footer";
import Header from "../components/Header";
import "./style.css";

export default function BaseLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
