import React from "react";

import PropTypes from "prop-types";

export function BlogEntry(props) {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 blog-entry">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8 h-96">
            <img
              src={props.image}
              loading="lazy"
              alt="Couple in the kirchen"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p>{props.date}</p>
          <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
            {props.title}
          </h1>

          {props.children}
        </div>
      </div>
    </>
  );
}

BlogEntry.propTypes = {
  image: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};
