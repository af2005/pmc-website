import PropTypes from "prop-types";
import React from "react";

export function LeftImage(props) {
  return (
    <>
      <div className={`py-16 ${props.className}`}>
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src={props.image}
                alt=""
                className="w-80 m-auto"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

LeftImage.propTypes = {
  image: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};

export function RightImage(props) {
  return (
    <>
      <div className={`py-16 ${props.className}`}>
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="space-y-6 md:7/12 lg:w-6/12">{props.children}</div>
            <div className="md:5/12 lg:w-6/12">
              <img src={props.image} alt="" className="w-80 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

RightImage.propTypes = {
  image: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};
