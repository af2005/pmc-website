import React from "react";

import appreciate from "../../img/icons/undraw/undraw_appreciation_re_8nbx.svg";
import phone from "../../img/icons/undraw/undraw_my_app_re_gxtj.svg";

import { LeftImage, RightImage } from "../../components/ImageContent";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import pair from "../../img/icons/undraw/undraw_pair_programming_njlp.svg";
import { AnimatedArrowButton } from "../../components/PMCButton";

export default function WhyPMC() {
  return (<>
    <Helmet title="Warum" />

    <RightImage image={appreciate} className={"bg-cultured"}>
      <h1 className="text-2xl pmc-h2 text-ming font-bold md:text-5xl">
        Der beste Ort um Deine Beziehung zu verbessern.
      </h1>
      <div className="space-y-4">
        <p className="text-gray-600">
          Wir sind überzeugt,
          dass Beziehungen – egal, welcher Art –
          der Schlüssel zu unserem Glück sind.
          Deshalb beschäftigen wir uns ausführlich mit der schönsten Sache der Welt.
        </p>

      </div>
      <Link to="why/learn-more" className="block w-full ">
        <AnimatedArrowButton className="w-64">Starte Deinen Plan
        </AnimatedArrowButton>
      </Link>
    </RightImage>

    <LeftImage image={phone}>
      <h2 className="text-2xl text-rosetaupe font-bold md:text-4xl">
        Personalisierter Plan
      </h2>
      <p className="mt-6 text-onyx">

        Wir erstellen dir deinen Plan - angepasst auf dein persönliches Thema. Du und dein Partner*in brauchen nur 7
        Minuten pro Tag mit Wissen, Übungen & Selfcare Routinen.
      </p>
    </LeftImage>
    <RightImage image={phone} className="bg-spanishpink">
      <h2 className="text-2xl text-rosetaupe font-bold md:text-4xl">
        Echte Ergebnisse
      </h2>
      <p className="mt-6 text-onyx">
        Lass uns deine Emotionen verstehen, Verbunden sein und erwecke die Liebe
      </p>
    </RightImage>

    <LeftImage image={pair} className="bg-ming">
      <h2 className="text-2xl text-apple font-bold md:text-4xl">
        Coachings & Workshops
      </h2>
      <p className="mt-6 text-cultured">
        Bleib nie allein - wir sorgen für einen Safe Space,
        in dem du Dich austauschen darfst.
        Mit Deiner Membership kannst Du an wöchentlichen Workshops und 1:1s teilnehmen.
      </p>

    </LeftImage>

    <div className="py-16 white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
          Das sagen unsere Kunden
        </h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div className="h-full flex flex-col justify-center space-y-4">

              <p className="text-gray-600 md:text-xl">
                <span className="font-serif">"</span>
                Dank Power Mind Club ist so vieles leichter und harmonischer! Unsere Beziehung hat eine ganz andere
                Qualität erreicht und es kommt kaum noch zu Missverständnissen und Konflikten. Und das, obwohl wir oft
                kurz vorm Ende standen. Wir sind unglaublich dankbar für unseren Power Mind Coach..{" "}
                <span className="font-serif">"</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">
                  Kathie & Florian
                </h6>
                <span className="text-xs text-gray-500">
                    Anfang 30, Verheiratet
                  </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>);
}
