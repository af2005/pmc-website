import React from "react";

import { LeftImage } from "../components/ImageContent";
import rocket from "../img/icons/doodle/misc/rocket.svg";
import checklist from "../img/icons/undraw/undraw_booking_re_gw4j.svg";
import happy from "../img/icons/doodle/emojis/happy-emoji.svg";
import heart from "../img/icons/doodle/interface/heart.svg";
import message from "../img/icons/doodle/interface/message.svg";
import { Col, Container, Row } from "../components/Flex";

function CallToAction() {
  return (
    <div className="py-16 lg:py-40 pmc-gradient-green">
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
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-xl transition bg-ming shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
              >
                <span className="block text-white font-semibold">
                  Mache den Test
                </span>
              </button>
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
  );
}

function ThreeFeatures() {
  return (
    <>
      <div className={"py-16 lg:py-40 container m-auto text-center"}>
        <Row className={""}>
          <Col className="w-10/12 sm:w-7/12 md:w-4/12">
            <Container className="flex flex-col">
              <img src={happy} alt="smile" className="h-20 mb-5 " />
              <h6 className="pmc-h6">Lerne</h6>
              <p>Wie Deine Beziehung noch besser werden kann</p>
            </Container>
          </Col>
          <Col className="w-10/12 sm:w-7/12 md:w-4/12">
            <Container className="flex flex-col">
              <img src={heart} alt="heart" className="h-20 mb-5 " />
              <h6 className="pmc-h6">Tausche Dich aus</h6>
              <p>Es gibt viele Menschen mit denselben Gefühlen wie du</p>
            </Container>
          </Col>
          <Col className="w-10/12 sm:w-7/12 md:w-4/12">
            <Container className="flex flex-col">
              <img src={message} alt="talk" className="h-20 mb-5 " />
              <h6 className="pmc-h6">Buche ein Power Mind</h6>
              <p> Finde einen zertifizierten Coach der genau für Dich passt.</p>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

function Content() {
  return (
    <>
      <CallToAction />
      <ThreeFeatures />

      <LeftImage image={rocket}>
        <h2 className="text-2xl text-ming font-bold md:text-4xl">
          We are the best
        </h2>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
          voluptatem accusantium nemo perspiciatis delectus atque autem!
          Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
          Officiis id consequatur atque doloremque!
        </p>
        <p className="mt-4 text-gray-600">
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
