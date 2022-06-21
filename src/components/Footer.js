import React from "react";
import { Link } from "gatsby";
import { FaHeart } from "react-icons/all";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

function Newsletter() {
  const {  } = useHubspotForm({
    portalId: "25769060",
    formId: "2b92be4f-e4af-4b4f-bec7-34d0b59a2328",
    target: "#newsletter-hubspot",
  });
  return (
    <>
      <div className="py-12 sm:py-12 lg:py-16">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center rounded-lg p-4 sm:p-8">
            <div className="mb-4 sm:mb-8">
              <h2 className="pmc-h2 text-onyx text-xl sm:text-2xl lg:text-3xl font-bold text-center">
                Bleibe informiert
              </h2>
              <p className="text-onyx text-center">
                Abboniere unseren Newsletter
              </p>
            </div>
            <div id="newsletter-hubspot" className="w-full" />
          </div>
        </div>
      </div>{" "}
    </>
  );
}

function Sitemap() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 py-8 border-b border-t">
      <div>
        <h6 className="pmc-h6">Company</h6>
        <ul className="list-inside mt-4 space-y-4">
          <li>
            <a
              href="/about-us/index.js"
              className="hover:text-cyan-600 transition"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="pmc-h6">App</h6>
        <ul className="list-inside mt-4 space-y-4">
          <li>
            <a
              href="/about-us/index.js"
              className="hover:text-cyan-600 transition"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="pmc-h6">Rechtliches</h6>
        <ul className="list-inside mt-4 space-y-4">
          <li>
            <Link to="legal/imprint/" className="transition">
              Impressum
            </Link>
          </li>
          <li>
            <Link to="legal/data-protection/" className="transition">
              Datenschutzerklärung
            </Link>
          </li>
          <li>
            <Link to="legal/agb/" className="transition">
              Allgemeine Geschäftsbedinungen
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <footer className="bg-cultured rounded-xl">
        <Newsletter />

        <div className="container m-auto px-6 py-16 space-y-8 text-gray-600 md:px-12 lg:px-20">
          {/*<Sitemap/>*/}

          <div className="">
            <h5 className="font-bold">Hilfe in Notfällen</h5>
            <p>
              Wenn du oder eine dir nahestehende Person dringend Hilfe benötigt,
              wende dich bitte umgehend an folgende Anlaufstelle:
              telefonseelsorge.de | Telefon 0800 111 0 111
            </p>
          </div>

          <div className="flex justify-between px-4 py-3 rounded-md  text-gray-600">
            <span>
              &copy; Power Mind Club <span id="year"></span>
            </span>
            <span className="block">
              Made with much <FaHeart className="inline" /> in Hamburg
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
