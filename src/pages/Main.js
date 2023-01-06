import React from 'react'
import Banner from 'src/components/Banner'
import Card from 'src/components/Card'
import Comments from 'src/components/Comments'
import ShortView from 'src/components/ShortView'
import Common from 'src/components/templates/Common'
import Button from 'src/components/ui/button/Button'
import { categories } from 'src/utils/categories'
import { comments } from 'src/utils/comments'

function Main() {
  return (
    <Common>
      <div className="main__wrapper">
        <ShortView
          title='Category menu'
          listItems={ categories }
          buttonTitle='More categories'
        >
          <Banner />
          <Banner />
        </ShortView>
        <ShortView
          title='Best selling products'
          listItems={ categories }
          buttonTitle='More products'
        >
          <Card
            title='Product Title'
            img='/imgs/dish.png'
            description='Space for a small product description '
            price='1.48'
          />
          <Card
            discount={ 36 }
            img='/imgs/dish.png'
            title='Product Title'
            description='Space for a small product description '
            price='1.48'
          />
          <Card
            discount={ 36 }
            img='/imgs/dish.png'
            title='Product Title'
            description='Space for a small product description '
            price='1.48'
          />
        </ShortView>
        <ShortView
          title='Best from Farmers'
          listItems={ categories }
          buttonTitle='More products'
        >
          <Card
            title='Product Title'
            img='/imgs/dish.png'
            description='Space for a small product description '
            price='1.48'
          />
          <Card
            discount={ 36 }
            img='/imgs/dish.png'
            title='Product Title'
            description='Space for a small product description '
            price='1.48'
          />
          <Card
            discount={ 36 }
            img='/imgs/dish.png'
            title='Product Title'
            description='Space for a small product description '
            price='1.48'
          />
        </ShortView>
        <div className="main__comments">
          <Comments
            items={ comments }
          />
        </div>
        <div className="main__headline">
          <div className="main__headline-top">
            <h3 className="main__headline-title">
              Section Headline
            </h3>
            <Button
              type='none'
              rightIcon={ '/imgs/carrot-right-green.svg' }
            >
              Button
            </Button>
          </div>
          <ul className="main__headline-cards">
            <li className="main__headline-card">
              <Card
                title='Product Title'
                img='/imgs/dish.png'
                description='Space for a small product description '
                price='1.48'
              />
            </li>
            <li className="main__headline-card">
              <Card
                title='Product Title'
                img='/imgs/dish.png'
                description='Space for a small product description '
                price='1.48'
              />
            </li>
            <li className="main__headline-card">
              <Card
                title='Product Title'
                img='/imgs/dish.png'
                description='Space for a small product description '
                price='1.48'
              />
            </li>
            <li className="main__headline-card">
              <Card
                title='Product Title'
                img='/imgs/dish.png'
                description='Space for a small product description '
                price='1.48'
              />
            </li>
          </ul>
        </div>
        <div className="main__blogs">
          <div className="main__blogs-top">
            <h3 className="main__blogs-title">Read our Blog posts</h3>
            <Button
              type='none'
              rightIcon={ '/imgs/carrot-right-green.svg' }
            >
              Go to blog
            </Button>
          </div>
          <div className="main__blogs-wrapper">
            <div className="main__blogs-huge">
              <span className="main__huge-tip">Dinner tips</span>
              <div className="main__huge-img">
                <img src="/imgs/dish.png" alt="" />
              </div>
              <div className="main__huge-info">
                <h2 className="main__info-title">
                  Our chef tips for a great and tasty dinner ready in 20 minutes
                </h2>
                <div className="main__info-cridantials">
                  <div className="main__cridantials-wrapper">
                    <div className="main__cridantials-img">
                      <img src="/imgs/avatar.png" alt="" />
                    </div>
                    <span className='main__cridantials-name'>Author</span>
                  </div>
                  <span className='main__cridantials-date'>17.6.2020</span>
                </div>
              </div>
            </div>
            <div className="main__blogs-vertical">
              <div className="main__vertical-img">
                <img src="/imgs/dish.png" alt="" />
              </div>
              <div className="main__vertical-info">
                <strong className="main__vertical-tip">Vegetable</strong>
                <h2 className="main__vertical-title">Which vegetable your family will love and want’s eat each day</h2>
                <div className="main__vertical-cridantials">
                  <span className="main__cridantials-name">Author</span>
                  <span className="main__cridantials-date">15. 6. 2020</span>
                </div>
              </div>
            </div>
            <ul className="main__blogs-horizontals">
              <li className="main__horizontals-horizontal">
                <div className="main__horizontal-info">
                  <h2 className="main__horizontal-title">
                    Salat is kinda good start to your morning routines
                  </h2>
                  <div className="main__horizontal-cridantials">
                    <span className="main__cridantials-name">Author</span>
                    <span className="main__cridantials-date">15. 6. 2020</span>
                  </div>
                </div>
                <div className="main__horizontal-img">
                  <img src="/imgs/dish.png" alt="" />
                </div>
              </li>
              <li className="main__horizontals-horizontal">
                <div className="main__horizontal-info">
                  <h2 className="main__horizontal-title">
                    Salat is kinda good start to your morning routines
                  </h2>
                  <div className="main__horizontal-cridantials">
                    <span className="main__cridantials-name">Author</span>
                    <span className="main__cridantials-date">15. 6. 2020</span>
                  </div>
                </div>
                <div className="main__horizontal-img">
                  <img src="/imgs/dish.png" alt="" />
                </div>
              </li>
              <li className="main__horizontals-horizontal">
                <div className="main__horizontal-info">
                  <h2 className="main__horizontal-title">
                    Salat is kinda good start to your morning routines
                  </h2>
                  <div className="main__horizontal-cridantials">
                    <span className="main__cridantials-name">Author</span>
                    <span className="main__cridantials-date">15. 6. 2020</span>
                  </div>
                </div>
                <div className="main__horizontal-img">
                  <img src="/imgs/dish.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Common>
  )
}

export default Main