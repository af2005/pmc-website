import React from 'react'
import PropTypes from 'prop-types'

export default function Button (props) {
  return (
    <button>
        className={`
        group 
        flex 
        h-min 
        w-fit 
        items-center 
        justify-center 
        p-0.5 
        text-center 
        font-medium 
        focus:z-10 
        rounded-lg 
        text-white 
        bg-blue-700 
        border 
        border-transparent 
        hover:bg-blue-800 
        focus:ring-4 
        focus:ring-blue-300 
        disabled:hover:bg-blue-700 
        dark:bg-blue-600 
        dark:hover:bg-blue-700 
        dark:focus:ring-blue-800 
        dark:disabled:hover:bg-blue-600 
        btn-${props.color} ${props.className}`}
      >
        {props.children}

    </button>
  )
}
Button.propTypes = {
  color: PropTypes.oneOf(
    ["ming","apple","transparent", "spanish-pink", "rose-taupe"]),
  className: PropTypes.string,
  children: PropTypes.node
}


