import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/button/Button';

function ShortView({
  children,
  title = '',
  listItems = [],
  buttonTitle = 'button'
}) {

  const [maxListItemsVisible, setmaxListItemsVisible] = useState(5);

  const changeMaxListItems = () => {
    if (listItems.length !== maxListItemsVisible) setmaxListItemsVisible(listItems.length)
  }

  return (
    <div className="short-view">
      <div className="short-view__left">
        <div className="short-view__left-top">
          <h3 className="short-view__left-title">{ title }</h3>
          <ul className="short-view__list">
            {
              listItems
                .slice(0, maxListItemsVisible)
                .map(listItem =>
                  <li key={ listItem.id } className="short-view__list-item">
                    <Link to={ `/category/${listItem.type}` }>
                      { listItem.title }
                    </Link>
                  </li>
                )
            }
          </ul>
        </div>
        <Button
          type='none'
          rightIcon={ '/imgs/carrot-right-black.svg' }
          handleClick={ changeMaxListItems }
        >
          { buttonTitle }
        </Button>
      </div>
      <div className="short-view__right">
        { children }
      </div>
    </div>
  )
}

export default ShortView