import React from "react";

import { LeftImage } from "../components/ImageContent";
import checklist from "../img/icons/undraw/undraw_booking_re_gw4j.svg";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import app1 from "../img/mockups/app-1.webp";
import health from "../img/icons/undraw/undraw_workout_gcgu.svg";
import party from "../img/icons/undraw/undraw_couple_re_94tl.svg";
import grandma from "../img/icons/undraw/undraw_together_re_a8x4.svg";

function CallToAction() {
  return (
    <>
      <Helmet title="Home" />
      <div className="py-16 lg:py-40 gradient-ming-to-apple">
        <div className="container m-auto px-6 space-y-8 text-onyx md:px-12 lg:px-20">
          <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl text-white font-bold md:text-4xl">
                Was kannst du an deiner Beziehung verbessern?
              </h1>
              <p className="text-lg text-white">
                Führende PMC Coaches haben ein System entwickelt um eure
                Beziehung zu verstehen. Erhalte in 3 Minuten Dein Ergebnis.
              </p>
              <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                <Link to="test/" className="disabled">
                  <button
                    type="button"
                    title="Es lohnt sich!"
                    className="btn w-full py-3 px-6 text-center rounded-xl transition bg-ming shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                  >
                    <span className="block text-white font-semibold">
                      Coming soon
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:5/12 lg:w-5/12 pt-10 lg:py-0">
              <img
                src={checklist}
                width="832"
                height="608"
                className="w-80 m-auto"
                loading="lazy"
                alt="mobility_illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Features() {
  return (
    <>
      <section className="text-onyx body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="pmc-topline text-xs text-ming  mb-1">
              Das sieht auch die Wissenschaft so
            </h2>
            <h1 className="sm:text-3xl text-2xl title-font mb-4  pmc-h2">
              Es gibt nichts Wichtigeres als die Liebe.
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
              Wir glauben, dass es in unserer Verantwortung liegt, dafür zu
              sorgen, dass alle Menschen Zugang zu Beziehungscoaching haben. Das
              ist unsere App, und daran halten wir fest.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 xl:border-0">
              <p className="">
                <img alt="Health" className="h-48 m-auto pb-3" src={health} />
              </p>
              <p className="leading-relaxed text-base mb-4">
                Gesunde Beziehungen sind für die allgemeine Gesundheit genauso
                wichtig wie Ernährung und Sport
              </p>
            </div>
            <div className="xl:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <p className="">
                <img alt="Party" className="h-48 m-auto pb-3" src={party} />
              </p>
              <p className="leading-relaxed text-base mb-4">
                Menschen in gesunden Ehen leben im Durchschnitt 10 Jahre länger.
              </p>
            </div>
            <div className="xl:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <p className="">
                <img
                  alt="Intimicy"
                  className="h-48 m-auto pb-3"
                  src={grandma}
                />
              </p>
              <p className="leading-relaxed text-base mb-4">
                Der wichtigste Indikator für Glück ist die Aufrechterhaltung
                intimer Beziehungen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Content() {
  return (
    <>
      <CallToAction />
      <Features />

      <LeftImage image={app1} className="bg-white">
        <h2 className="text-2xl text-ming font-bold md:text-4xl">
          Power Mind Club, dein Personal Trainer für Liebe und Beziehung.
        </h2>
        <p className="mt-6 text-onyx">
          Power Mind Club ist die App für Beziehungscoaching und Wohlbefinden.
          Wir unterstützen unsere Nutzer:innen gesündere und glücklichere
          Beziehungen zu führen. Wir ermöglichen unseren Nutzer:innen an sich
          selbst und der Beziehung zu arbeiten. In einer Beziehung geht es um
          ein zufriedenes Ich.
        </p>
        <p className="mt-4 text-onyx">
          {" "}
          Unsere Vision: Menschen lernen besser zu lieben. Erfüllende, gesündere
          und glückliche Beziehungen für alle.
        </p>
      </LeftImage>

      <section className="text-onyx bg-apple">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="mb-12 text-center text-2xl text-onyx font-bold md:text-4xl">
            Das sagen unsere Kunden
          </h2>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-ming mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Dank Power Mind Club ist so vieles leichter und harmonischer!
              Unsere Beziehung hat eine ganz andere Qualität erreicht und es
              kommt kaum noch zu Missverständnissen und Konflikten. Und das,
              obwohl wir oft kurz vorm Ende standen. Wir sind unglaublich
              dankbar für unseren Power Mind Coach.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-ming mt-8 mb-6"></span>
            <h2 className="text-gray-900 pmc-h1"> Kathie & Florian</h2>
            <p className="text-ming">Anfang 30, Verheiratet</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Index() {
  return (
    <>
      <Content />
    </>
  );
}
