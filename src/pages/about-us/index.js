import React from "react";

import alex from "../../img/team/alex.webp";
import kim from "../../img/team/kim.webp";
import chenchen from "../../img/team/chenchen.webp";
import teamcollab from "../../img/icons/undraw/undraw_team_collaboration_re_ow29.svg";
import goal from "../../img/icons/undraw/undraw_spread_love_re_v3cl.svg";
import { BsInstagram, BsLinkedin, FaArrowRight } from "react-icons/all";
import { Helmet } from "react-helmet";

function TimeLineStep(props) {
  return (
    <>
      <Helmet title="Team" />
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-cultured dark:text-gray-500">
          {props.date}
        </time>
        <h3 className="text-lg font-semibold text-apple dark:text-white">
          {props.title}
        </h3>
        {/*<p className="mb-4 text-base font-normal text-cultured dark:text-onyx">*/}
        {/*  Content*/}
        {/*</p>*/}
        <span className="inline-flex items-center py-2 px-4 text-sm font-medium text-onyx bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-onyx dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          Learn more <FaArrowRight className="ml-2 w-3 h-3" />
        </span>
      </li>
    </>
  );
}

function TimeLine() {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <TimeLineStep date="Januar 2022" title="Idee entstanden" />
        <TimeLineStep date="Februar 2022" title="WHU 3 Day Start-up" />
        https://www.threedaystartup.de
        <TimeLineStep date="Juni 2022" title="WHU Accelerator" />
        <TimeLineStep date="Juli 2022" title="GmbH Gründung" />
        <TimeLineStep date="August 2022" title="Launch MVP" />
      </ol>
    </>
  );
}

function Management() {
  return (
    <>
      <div className="grid gap-24 md:gap-12 md:grid-cols-3">
        <div className="space-y-4 text-center group">
          <div className="w-56 h-56 mx-auto rounded-[4rem] rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
            <img
              className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
              src={chenchen}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
          </div>
          <div className="pt-4">
            <h4 className="pmc-h1 text-xl">Chenchen Cao</h4>
            <span className="block text-sm text-gray-500">
              Geschäftsführerin
            </span>
          </div>
          <div className="flex justify-center space-x-4 text-gray-500">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/chenchen-cao/"
              target="_blank"
              aria-label="linkedin"
            >
              <BsLinkedin className="w-7 h-7 hover-text-apple" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="instagram"
            >
              <BsInstagram className="w-7 h-7 hover-text-apple" />
            </a>
          </div>
        </div>
        <div className="space-y-4 text-center group">
          <div className="w-56 h-56 mx-auto rounded-[4rem] rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
            <img
              className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
              src={kim}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
          </div>
          <div className="pt-4">
            <h4 className="pmc-h1 text-xl">Kim Kasch</h4>
            <span className="block text-sm text-gray-500">
              Geschäftsführerin
            </span>
          </div>
          <div className="flex justify-center space-x-4 text-gray-500">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/kimcatherinkasch/"
              target="_blank"
              aria-label="linkedin"
            >
              <BsLinkedin className="w-7 h-7 hover-text-apple" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="instagram"
            >
              <BsInstagram className="w-7 h-7 hover-text-apple" />
            </a>
          </div>
        </div>
        <div className="space-y-4 text-center group">
          <div className="w-56 h-56 mx-auto rounded-[4rem] rotate-45 overflow-hidden md:w-40 md:h-40 lg:w-56 lg:h-56">
            <img
              className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
              src={alex}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
          </div>
          <div className="pt-4">
            <h4 className="pmc-h1 text-xl">Alexander Franke</h4>
            <span className="block text-sm text-gray-500">
              Designer & Entwickler
            </span>
          </div>
          <div className="flex justify-center space-x-4 text-gray-500">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/alexander-franke-226656178/"
              target="_blank"
              aria-label="linkedin"
            >
              <BsLinkedin className="w-7 h-7 hover-text-apple" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Team() {
  return (
    <>
      <div className="py-10 md:py-20  bg-gray-50">
        <div className="container m-auto pb-10 md:pb-20">
          <img
            src={teamcollab}
            alt="spread love"
            className="h-56 px-10 m-auto"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h1 className="mb-4 text-center text-2xl text-onyx font-bold md:text-4xl pmc-h2">
              Die Power Minds
            </h1>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
              Ins Leben gerufen wurde Power Mind Club im Juli 2022 in Hamburg
              von unseren Gründer*innen
              <span className="font-bold"> Alexander Franke</span>,
              <span className="font-bold"> Chenchen Cao</span> und
              <span className="font-bold"> Kim Kasch</span>.
              Die Mission von Power Mind Club ist es,
              Millenials und Gen Z eine Plattform zu bieten,
              um Menschen zu befähigen,
              achtsame Gewohnheiten zu entwickeln für gesündere
              und glücklichere Beziehungen.


            </p>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto mt-3">
              Angepasst auf Deine individuellen Bedürfnisse & nie allein.
                     </p>

          </div>
          <Management />
        </div>
      </div>
      <div className="py-20 md:pb-20">
        <div className="container m-auto px-7 md:px-20 lg:px-50">

          <img alt="our goal" src={goal} className="w-64 m-auto pb-5"/>
          <h2 className="mb-4 text-center text-2xl text-onyx font-bold md:text-4xl pmc-h2">
            Unser Ziel
          </h2>
          Eine Mental Well-being Plattform zu erschaffen, die sich an dich und deinen Fortschritt anpasst - mit echten Psycholog*innen und einer Community, die uns motiviert am Ball zu bleiben.
        </div>
      </div>


      <div className="py-20 md:pb-20 gradient-ming-to-onyx">
        <div className="container m-auto px-7 md:px-20 lg:px-50">
          <h2 className="mb-4 text-center text-2xl text-cultured font-bold md:text-4xl pmc-h2">
            Zeitleiste
          </h2>
          <TimeLine />
        </div>
      </div>
    </>
  );
}
