import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './ui/button/Button'

function Card({
  discount = 0,
  img = '',
  title = '',
  description = '',
  price = ''
}) {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/dishes/1`)
  }

  return (
    <div className="card">
      {
        !!discount &&
        <span className="card__discount">- { discount } %</span>
      }
      <div className="card__img">
        <img src={ img } alt="product_img" />
      </div>
      <div className="card__description">
        <h3 className="card__description-title">{ title }</h3>
        <p className="card__description-text">{ description }</p>
      </div>
      <div className="card__buy">
        <div className="card__buy-price">
          <strong className="card__buy-original">{ price } USD</strong>
          {
            !!discount &&
            <span className="card__buy-discount">{ discount }</span>
          }
        </div>
        <Button
          type='filled'
          handleClick={handleNavigate}
        >
          Buy now
        </Button>
      </div>
    </div>
  )
}

export default Card