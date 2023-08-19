import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../About Us/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Category from "../components/Category";
import Header from "../components/Header";
import Cuisine from "./Cuisine";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Recipe from "./Recipe";
import Searched from "./Searched";

export default function Pages() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/Full-Recipe-App" element={<Home />} />
        <Route
          path="/cuisine/:type"
          element={
            <>
              <Header />
              <Category />
              <Cuisine />
              <Footer />
            </>
          }
        />
        <Route
          path="/search/:search"
          element={
            <>
              <Header /> <Searched />
              <Footer />{" "}
            </>
          }
        />
        <Route
          path="/recipe/:name"
          element={
            <>
              <Header /> <Recipe />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Header /> <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <>
              <Header /> <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
