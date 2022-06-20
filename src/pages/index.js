import React from "react";

import { LeftImage } from "../components/ImageContent";
import art from "../img/icons/undraw/undraw_conceptual_idea_xw7k.svg";
import checklist from "../img/icons/undraw/undraw_booking_re_gw4j.svg";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import health from "../img/icons/undraw/undraw_workout_gcgu.svg"
import party from "../img/icons/undraw/undraw_party_re_nmwj.svg"
import grandma from "../img/icons/undraw/undraw_grandma_re_rnv1.svg"



function CallToAction() {
  return (
    <>
      <Helmet title="Home" />
      <div className="py-16 lg:py-40 gradient-ming-to-apple">
        <div className="container m-auto px-6 space-y-8 text-onyx md:px-12 lg:px-20">
          <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl text-white font-bold md:text-4xl">
                Was kannst Du an Deiner Beziehung verbessern?
              </h1>
              <p className="text-lg text-white">
                Führende PMC Coaches haben ein System entwickelt... Erhalte in 3
                Minuten Dein Ergebnis.
              </p>
              <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                <Link to="test/">
                  <button
                    type="button"
                    title="Es lohnt sich!"
                    className="btn w-full py-3 px-6 text-center rounded-xl transition bg-ming shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                  >
                    <span className="block text-white font-semibold">
                      Mache den Test
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
              Wir glauben, dass es in unserer Verantwortung liegt,
              dafür zu sorgen,
              dass alle Menschen Zugang zu Beziehungscoaching haben.
              Das ist unsere App, und daran halten wir fest.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <p className="">
                <img alt="Health" className="h-48 m-auto pb-3" src={health}/>
              </p>
              <p className="leading-relaxed text-base mb-4">
                Gesunde Beziehungen sind für die allgemeine Gesundheit
                genauso wichtig wie Ernährung und Sport
              </p>

            </div>
            <div className="xl:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <p className="">
                <img alt="Party"
                 className="h-48 m-auto pb-3" src={party}/>
              </p>
              <p className="leading-relaxed text-base mb-4">
                Menschen in gesunden Ehen leben im Durchschnitt 10 Jahre länger.
              </p>

            </div>
            <div className="xl:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <p className="">
                <img alt="Intimicy"
                 className="h-48 m-auto pb-3" src={grandma}/>
              </p>
              <p className="leading-relaxed text-base mb-4">
                Der wichtigste Indikator für Glück ist die Aufrechterhaltung intimer Beziehungen.
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

      <LeftImage image={art} className="bg-rosetaupe">
        <h2 className="text-2xl text-spanishpink font-bold md:text-4xl">
          Power Mind Club, Dein Personal Trainer für Liebe und Beziehung.
        </h2>
        <p className="mt-6 text-cultured">

          Power Mind Club ist die App für Beziehungscoaching und Wohlbefinden. Wir unterstützen unsere Nutzer:innen gesündere und glücklichere Beziehungen zu führen. Wir ermöglichen unseren Nutzer:innen an sich selbst und der Beziehung zu arbeiten. In einer Beziehung geht es um ein zufriedenes ich,



        </p>
        <p className="mt-4 text-cultured">
          {" "}
          Unsere Vision: Menschen lernen besser zu lieben. Erfüllende, gesündere und glückliche Beziehungen für alle.

        </p>
      </LeftImage>
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
