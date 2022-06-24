import React from "react";

import ballon from "../../img/icons/doodle/objects/balloon.svg";
import ballons from "../../img/icons/doodle/objects/balloon-2.svg";
import spreadlove from "../../img/icons/undraw/undraw_spread_love_re_v3cl.svg";
import { Helmet } from "react-helmet";
import mock1 from "../../img/mockups/1.png";
import mock2 from "../../img/mockups/2.png";
import mock3 from "../../img/mockups/3.png";
import mock4 from "../../img/mockups/4.png";
import mock5 from "../../img/mockups/5.png";
import mock6 from "../../img/mockups/6.png";
import mock7 from "../../img/mockups/7.png";
import mock8 from "../../img/mockups/8.png";
import mock9 from "../../img/mockups/9.png";
import mock10 from "../../img/mockups/10.png";


import ImageGallery from "react-image-gallery";

const images = [{
  original: mock1
}, {
  original: mock2
}, {
  original: mock3
}, {
  original: mock4
}, {
  original: mock5
}, {
  original: mock6
}, {
  original: mock7
}, {
  original: mock8
}, {
  original: mock9
}, {
  original: mock10
}];

class AppMockupsGallery extends React.Component {
  render() {
    return <ImageGallery
      items={images}
      lazyLoad={true}
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
    />;
  }
}

function oldSubscription() {
  return (<div className="pmc-gradient-pink">
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
        <div
          className="mt-12 mb-4 m-auto items-center justify-center space-y-6 lg:flex lg:space-y-0 lg:space-x-6 xl:w-10/12">
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

  );
}

export default function OurApp() {
  return (<>
      <Helmet title="App" />

      <section className="text-cultured body-font  bg-ming">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">


          <div className="text-center lg:w-2/3 mt-4 w-full ">
            <div className="container m-auto pb-10">
              <img src={spreadlove} alt="spread love" className="w-64 m-auto" />
            </div>
            <h1 className="sm:text-4xl text-3xl mb-4 pmc-h2">Werde jetzt Power Mind</h1>
            <p className="mb-8 leading-relaxed">
              Wir arbeiten noch an der App.
              Du kannst aber heute schon Tipps und Übungen für deine Beziehung erhalten.
              Abonniere einfach unten unseren Newsletter oder folge uns auf Instagram. </p>
            <div className="flex justify-center">
              <a href="https://instagram.com/powermindclub/">
                <button
                  className="no-underline inline-flex text-white btn-apple border-0 py-2 px-6 rounded text-lg">Folge uns auf
                  Instagram
                </button>
              </a>
              {/*<button*/}
              {/*  className="ml-4 inline-flex text-white bg-ming border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Google Play Store*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </section>
      <AppMockupsGallery />


    </>);
}
