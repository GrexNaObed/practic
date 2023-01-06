import React from 'react'

const types = ['bordered', 'filled', 'none']

function Button({
  children,
  leftIcon = null,
  rightIcon = null,
  type = 'bordered',
  handleClick
}) {
  return (
    <button
      className={ `button ${type}` }
      onClick={ handleClick }
    >
      {
        leftIcon &&
        <img className='button__icon' src={ leftIcon } alt="" />
      }
      { children }
      {
        rightIcon &&
        <img className='button__icon' src={ rightIcon } alt="" />
      }
    </button>
  )
}

export default Button