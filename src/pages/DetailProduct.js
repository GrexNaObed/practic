import React from 'react'
import Common from 'src/components/templates/Common'
import Button from 'src/components/ui/button/Button'

function DetailProduct() {
  return (
    <Common>
      <div className="detail-product">
        <div className="detail-product__inner">
          <ul className="detail-product__crumbs">
            <li className="detail-product__crumb">Homepage</li>
            <li className="detail-product__crumb">Fruit and vegetables</li>
            <li className="detail-product__crumb current">Carrots from Tomissy Farm</li>
          </ul>
          <div className="detail-product__content">
            <div className="detail-product__content-imgs">
              <div className="detail-product__content-img">
                <img src="/imgs/dish.png" alt="" />
              </div>
              <div className="detail-product__content-img">
                <img src="/imgs/dish.png" alt="" />
              </div>
              <div className="detail-product__content-img">
                <img src="/imgs/dish.png" alt="" />
              </div>
            </div>
            <div className="detail-product__content-details">
              <div className="detail-product__info">
                <div className="detail-product__info-top">
                  <h2 className="detail-product__title">Carrots from Tomissy Farm</h2>
                  <div className="detail-product__raiting">
                    <div className="detail-product__raiting-stars">
                      <img className="detail-product__raiting-star" src='/imgs/star-filled.svg' alt='' />
                      <img className="detail-product__raiting-star" src='/imgs/star-filled.svg' alt='' />
                      <img className="detail-product__raiting-star" src='/imgs/star-filled.svg' alt='' />
                      <img className="detail-product__raiting-star" src='/imgs/star-filled.svg' alt='' />
                      <img className="detail-product__raiting-star" src='/imgs/star-empty.svg' alt='' />
                    </div>
                    <span className="detail-product__raiting-review">(1 customer review)</span>
                  </div>
                </div>
                <p className="detail-product__description">
                  Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.
                </p>
                <div className="detail-product__details">
                  <div className="detail-product__details-left">
                    <span>
                      SKU:
                      <strong>76645</strong>
                    </span>
                    <span>
                      Category:
                      <strong>Vegetables</strong>
                    </span>
                    <span>
                      Stock:
                      <strong>In Stock</strong>
                    </span>
                    <span>
                      Farm
                      <strong>Grocery Tarm Fields</strong>
                    </span>
                  </div>
                  <div className="detail-product__details-right">
                    <span>
                      Freshness:
                      <strong>1 days old</strong>
                    </span>
                    <span>
                      Buy by:
                      <strong>pcs, kgs, box, pack</strong>
                    </span>
                    <span>
                      Delivery:
                      <strong>in 2 days</strong>
                    </span>
                    <span>
                      Delivery area
                      <strong>Czech republic</strong>
                    </span>
                  </div>
                </div>
                <div className="detail-product__pay">
                  <div className="detail-product__pay-inner">
                    <div className="detail-product__pay-price">
                      <span className='detail-product__price-origin'>36.23 USD</span>
                      <span className='detail-product__price-discount'>48.56 USD</span>
                    </div>
                    <Button type='filled' leftIcon={ '/imgs/plus.svg' }>Add to cart</Button>
                  </div>
                  <div className="detail-product__pay-actions">
                    <div className="detail-product__pay-action">
                      <img src="/imgs/heart.svg" alt="" />
                      <span>Add to my wish list</span>
                    </div>
                    <div className="detail-product__pay-action">
                      <img src="/imgs/compare.svg" alt="" />
                      <span>Compare</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-product__tabs"></div>
            </div>
          </div>
        </div>
      </div>
    </Common>
  )
}

export default DetailProduct