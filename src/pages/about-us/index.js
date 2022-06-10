import React from "react";

import alex from "../../img/team/alex.webp";
import kim from "../../img/team/kim.webp";
import chenchen from "../../img/team/chenchen.webp";
import teamcollab from "../../img/icons/undraw/undraw_team_collaboration_re_ow29.svg";
import { BsInstagram, BsLinkedin} from "react-icons/all";

function TimeLineStep(props){
    return(
      <>
        <li className="mb-10 ml-4">
          <div
            className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-cultured dark:text-gray-500">{props.date}</time>
          <h3 className="text-lg font-semibold text-apple dark:text-white">{props.title}</h3>
          <p className="mb-4 text-base font-normal text-cultured dark:text-onyx">Bla bla bla Quam hic dolore cumque voluptate rerum beatae et quae, tempore
            sunt, debitis dolorum officia aliquid explicabo? Excepturi,
            voluptate?.</p>
          <a href="#"
             className="inline-flex items-center py-2 px-4 text-sm font-medium text-onyx bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-onyx dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn
            more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg></a>
        </li>
      </>
    )
  }
function TimeLine() {
  return (<>
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <TimeLineStep date="Februar 2022" title="WHU Three day start up"/>
      <TimeLineStep date="Juni 2022" title="WHU Accelerator"/>
      <TimeLineStep date="Juli 2022" title="GmbH Gründung"/>

    </ol>
  </>);
}

function Management() {
  return (<>
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

          <a href="https://www.linkedin.com/in/chenchen-cao/" target="_blank" aria-label="linkedin">
            <BsLinkedin className="w-7 h-7 hover-text-apple"/>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <BsInstagram className="w-7 h-7 hover-text-apple"/>
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
          <a href="https://www.linkedin.com/in/kimcatherinkasch/" target="_blank" aria-label="linkedin">
           <BsLinkedin className="w-7 h-7 hover-text-apple"/>
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <BsInstagram className="w-7 h-7 hover-text-apple"/>
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

          <a href="https://www.linkedin.com/in/alexander-franke-226656178/" target="_blank" aria-label="linkedin">
            <BsLinkedin className="w-7 h-7 hover-text-apple"/>
          </a>
        </div>
      </div>
    </div>

  </>);
}

export default function Team() {
  return (<>
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
              We are a strong and diverse team with expertise in strategy
              consulting, business development, counseling, coding, and digital
              solution.
            </p>
          </div>
          <Management />


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
