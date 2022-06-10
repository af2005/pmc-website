import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import Meta from "./meta";
export default function Layout({ children }) {
  return (
    <>
    <Meta/>
    <div className="App">
      <Navigation />
      {children}
      <Footer />
    </div>
    </>
  );
}
