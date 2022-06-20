import React from "react";
import { Link } from "gatsby";
import { FaHeart } from "react-icons/all";
import PMCButton from "./PMCButton";
function Newsletter() {
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

            <form className="w-full max-w-md flex flex-col gap-2 mb-3 sm:mb-5 items-center">
              <input
                placeholder="Email"
                className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-1"
              />

              <PMCButton color="apple" className=" px-8 my-3 ">
                Send
              </PMCButton>
            </form>

            <p className="text-gray-400 text-xs text-center">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="#"
                className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
              >
                Term of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer className="bg-cultured rounded-xl">
        <Newsletter />
        <div className="container m-auto px-6 py-16 space-y-8 text-gray-600 md:px-12 lg:px-20">
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
