import React from 'react'
import Button from './ui/button/Button'

function Comments({
  items = []
}) {
  return (
    <div className="comments">
      <div className="comments__inner">
        <div className="comments__top">
          <h3 className="comments__top-title">Our customers says</h3>
          <Button
            type='none'
            rightIcon={ '/imgs/carrot-right-green.svg' }
          >
            Button
          </Button>
        </div>
        <div className="comments__content">
          <div className="comments__content-prev"></div>
          <ul className="comments__content-list">
            {
              items
                .map(comment =>
                  <li
                    key={ comment.id }
                    className="comments__content-comment"
                  >
                    <p className="comments__comment-text">
                      { comment.text }
                    </p>
                    <span className="comments__comment-author">
                      { comment.author }
                    </span>
                    <div className="comments__comment-avatar">
                      <img src={ comment.avatar || '/imgs/avatar.png' } alt="" />
                    </div>
                  </li>
                )
            }
          </ul>
          <div className="comments__content-next"></div>
        </div>
      </div>
    </div>
  )
}

export default Comments