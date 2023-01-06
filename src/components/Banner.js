import React from 'react'
import Button from './ui/button/Button'

function Banner({
  supTitle = 'Banner subfocus',
  title = 'Space for heading',
  buttonTitle = 'Read recepies'
}) {
  return (
    <div className="banner">
      <div className="banner__top">
        <span className="banner__top-suptitle">{ supTitle }</span>
        <h3 className="banner__top-title">{ title }</h3>
      </div>
      <Button
        rightIcon={ '/imgs/carrot-right-green.svg' }
      >
        { buttonTitle }
      </Button>
    </div>
  )
}

export default Banner