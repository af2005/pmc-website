import React from 'react'
import PropTypes from 'prop-types'

export default function Button (props) {
  return (
    <button
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
        border 
        border-transparent 
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


