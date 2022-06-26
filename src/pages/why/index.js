import React from "react";

import appreciate from "../../img/icons/undraw/undraw_appreciation_re_8nbx.svg";
import phone from "../../img/icons/undraw/undraw_my_app_re_gxtj.svg";

import { LeftImage, RightImage } from "../../components/ImageContent";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import pair from "../../img/icons/undraw/undraw_pair_programming_njlp.svg";
import highfive from "../../img/icons/undraw/undraw_high_five_re_jy71.svg";

import rebecca from "../../img/therapists/rebecca-baur.webp";
import { AnimatedArrowButton } from "../../components/PMCButton";

export default function WhyPMC() {
  return (
    <>
      <Helmet title="Warum" />

      <RightImage image={appreciate} className={"bg-cultured"}>
        <h1 className="text-2xl pmc-h2 text-ming font-bold md:text-5xl">
          Der beste Ort um deine Beziehung zu verbessern.
        </h1>
        <div className="space-y-4">
          <p className="text-gray-600">
            Wir sind überzeugt, dass Beziehungen – egal, welcher Art – der
            Schlüssel zu unserem Glück sind. Deshalb beschäftigen wir uns
            ausführlich mit der schönsten Sache der Welt.
          </p>
        </div>
        <Link to="/app" className="block w-full ">
          <AnimatedArrowButton className="w-48">
            Lade die App
          </AnimatedArrowButton>
        </Link>
      </RightImage>

      <LeftImage image={phone}>
        <h2 className="text-2xl text-onyx font-bold md:text-4xl">
          Personalisierter Plan
        </h2>
        <p className="mt-6 text-onyx">
          Wir erstellen dir deinen Plan - angepasst auf dein persönliches Thema.
          Du und dein:e Partner:in brauchen nur 7 Minuten pro Tag mit Wissen,
          Übungen & Selfcare Routinen.
        </p>
      </LeftImage>
      <RightImage image={highfive}>
        <h2 className="text-2xl text-onyx font-bold md:text-4xl">
          Echte Ergebnisse
        </h2>
        <p className="mt-6 text-onyx">
          Lass uns deine Emotionen verstehen, Verbunden sein und erwecke die
          Liebe
        </p>
      </RightImage>

      <LeftImage image={pair} className="bg-white">
        <h2 className="text-2xl text-onyx font-bold md:text-4xl">
          Coachings & Workshops
        </h2>
        <p className="mt-6 text-onyx">
          Bleib nie allein - wir sorgen für einen Safe Space, in dem du Dich
          austauschen darfst. Mit Deiner Membership kannst Du an wöchentlichen
          Workshops und 1:1s teilnehmen.
        </p>
      </LeftImage>

      <RightImage image={rebecca} className="bg-ming">
        <h2 className="text-2xl text-apple font-bold md:text-4xl">
          Treffe einen PMC Coach
        </h2>
        <p className="mt-6 text-cultured">Rebecca Baur - Systemischer Coach</p>
        <p className="text-cultured">Expertin in
          Beziehungskommunikation und Paar- / Einzelcoaching.</p>
        <p className="text-cultured">
          Unser Leben wird vorwiegend von einer Sache bestimmt, nämlich der Art
          und Weise, wie wir Verbindungen leben. Die Verbindung zu uns selbst,
          die Verbindung zu anderen Menschen und die Verbindung zur Umwelt bzw.
          Natur. Dabei ist die Beziehung zu uns selbst die wichtigste, denn sie
          legt den Grundstein für das Leben im Außen.
        </p>
      </RightImage>
    </>
  );
}
