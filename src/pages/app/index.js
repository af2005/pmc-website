import React from "react";

import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

import ballon from "../../img/icons/doodle/objects/balloon.svg";
import ballons from "../../img/icons/doodle/objects/balloon-2.svg";
import spreadlove from "../../img/icons/undraw/undraw_spread_love_re_v3cl.svg";

function Content() {
  return (
    <>
      <div className="pmc-gradient-pink">
        <div className="container m-auto pt-20 pb-5">
          <img src={spreadlove} alt="spread love" className="w-64 m-auto" />
        </div>
        <div className="container m-auto px-6 py-5 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-onyx font-bold md:text-4xl">
              Werde jetzt Power Mind.{" "}
            </h2>
            <p className="py-5">
              Das Abschliessen eines Power Mind Abos gibt Dir/euch Zugang zu ...
            </p>
          </div>
          <div className="mt-12 mb-4 m-auto items-center justify-center space-y-6 lg:flex lg:space-y-0 lg:space-x-6 xl:w-10/12">
            <div className="relative z-10 group mx-auto sm:w-7/12 lg:w-6/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-8">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl text-gray-700 font-semibold">
                    Monatlich
                  </h5>
                  <div className="relative flex justify-around">
                    <div className="flex">
                      <span className="-ml-6 text-xl text-apple font-bold">
                        €
                      </span>
                      <span className="text-4xl text-gray-800 font-bold leading-0">
                        19
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src={ballon}
                  width="512"
                  height="512"
                  className="h-24 m-auto"
                  alt="tanzanite illustration"
                />
                <p className="text-center text-gray-600">
                  Für Dich zum Ausprobieren.
                </p>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition btn-apple"
                >
                  <span className="font-semibold">Starte hier</span>
                </button>
              </div>
            </div>

            <div className="relative z-10 group mx-auto sm:w-7/12 lg:w-6/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-8">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl text-gray-700 font-semibold">
                    Jährlich
                  </h5>
                  <div className="relative flex justify-around">
                    <div className="flex">
                      <span className="-ml-6 text-xl text-apple font-bold">
                        €
                      </span>
                      <span className="text-4xl text-gray-800 font-bold leading-0">
                        180
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src={ballons}
                  width="512"
                  height="512"
                  className="h-24 m-auto"
                  alt="tanzanite illustration"
                />
                <p className="text-center text-gray-600">
                  Arbeite nachhaltig an Deiner Beziehung
                </p>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition btn-ming"
                >
                  <span className="text-white font-semibold">Starte hier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Team() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Content />

        <Footer />
      </div>
    </>
  );
}
