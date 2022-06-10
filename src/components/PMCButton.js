import React from "react";
import PropTypes from "prop-types";

export default function PMCButton(props) {
  return (
    <button
      className={`
        group 
        flex 
        h-min 
        w-fit 
        items-center 
        justify-center 
        py-1
        px-3
        text-center 
        font-bold
        focus:z-10 
        rounded-lg 
        border 
        border-transparent 
        btn-${props.color} ${props.className}`}
    >
      {props.children}
    </button>
  );
}
PMCButton.propTypes = {
  color: PropTypes.oneOf([
    "ming",
    "apple",
    "transparent",
    "spanish-pink",
    "rose-taupe",
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
};

export function AnimatedArrowButton(props) {
  return (
    <>
      <button className="animated-arrow-button">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{props.children}</span>
      </button>
    </>
  );
}
PMCButton.propTypes = {
  color: PropTypes.oneOf([
    "ming",
    "apple",
    "transparent",
    "spanish-pink",
    "rose-taupe",
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
};
