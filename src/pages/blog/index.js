import React from "react";

import kitchen from "../../img/unsplash/kitchen.webp";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Link } from "gatsby";


function BlogEntryTeaser(props) {
  return (<>

    <div className="flex flex-col mb-12 overflow-hidden">
      <div className="flex-shrink-0">
        <img className="object-cover w-full h-48 rounded-lg" src={props.image}
             alt="" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex-1">
            <div className="flex pt-6 space-x-1 text-sm text-gray-500">
              <time dateTime="2022-06-21"> Jun 21, 2022</time>
              <span aria-hidden="true"> · </span>
              <span> 3 min read </span>
            </div>
          <Link to="/blog/entries/2022-06-21-kraft-der-rituale" className="block mt-2 space-y-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">{props.title}</h3>
            <p className="text-lg font-normal text-gray-500">{props.children}</p>
          </Link>
        </div>
      </div>
    </div>


  </>);
}

BlogEntryTeaser.propTypes = {
  image: PropTypes.node, title: PropTypes.string, className: PropTypes.string, children: PropTypes.node
};

export default function Blog() {
  return (<>
    <Helmet title="Blog" />

    <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
            <span className="block w-max mx-auto px-3 py-1.5 font-bold border-0 rounded-full bg-apple text-onyx">
              Blog
            </span>
          <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
            Sharing is Caring
          </h2>
          <p className="lg:w-6/12 lg:mx-auto">
            Willkommen in unserem Blog.
          </p>
        </div>
      </div>

      <section>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 px-6">
            {/*<div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none px-6">*/}
            <BlogEntryTeaser image={kitchen}
                             title={"Die Kraft der Rituale – 5 Empfehlungen, die eure Beziehung stärken"}>
              Geht es euch auch so?
              Die Welt dreht sich gefühlt immer schneller,
              die Komplexität nimmt weiter zu und man weiß gar nicht mehr,
              wie man all die Termine unter einen Hut bringen soll?

            </BlogEntryTeaser>
          </div>
        </div>
      </section>
    </div>
  </>);
}
