import React from "react";

import { LeftImage } from "../components/ImageContent";
import art from "../img/icons/undraw/undraw_conceptual_idea_xw7k.svg";
import checklist from "../img/icons/undraw/undraw_booking_re_gw4j.svg";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/all";
import PMCButton from "../components/PMCButton";

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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-apple-dark tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
                <FaArrowRight className="ml-2" />
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
                <FaArrowRight className="ml-2" />
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Neptune
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
                <FaArrowRight className="ml-2" />
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
                <FaArrowRight className="ml-2" />
              </a>
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
          We are the best
        </h2>
        <p className="mt-6 text-cultured">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
          voluptatem accusantium nemo perspiciatis delectus atque autem!
          Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
          Officiis id consequatur atque doloremque!
        </p>
        <p className="mt-4 text-cultured">
          {" "}
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
          quam mollitia.
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
