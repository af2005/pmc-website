import React from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import Meta from "./meta";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <HubspotProvider>
        <div className="App">
          <Navigation />
          {children}
          <Footer />
        </div>
      </HubspotProvider>
    </>
  );
}
