import React from 'react'
import { Link } from 'react-router-dom'

function Footer({
  links = [],
  tags = []
}) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__links">
          {
            links
              .map((link, index) =>
                <div
                  key={ link.id }
                  className="footer__link"
                >
                  <h3 className="footer__link-title">{ link.title }</h3>
                  <ul className="footer__link-items">
                    {
                      link
                        .urls
                        .map(url =>
                          <li
                            key={ url.id }
                            className="footer__link-item"
                          >
                            <Link to={ `/${url.origin}` }>
                              { url.name }
                            </Link>
                          </li>
                        )
                    }
                  </ul>
                </div>
              )
          }
        </div>
        <div className="footer__tags">
          <h3 className="footer__tags-title">Product tags</h3>
          <ul className="footer__tags-items">
            {
              tags
                .map(tag =>
                  <li
                    key={ tag.id }
                    className="footer__tag"
                  >
                    { tag.title }
                  </li>
                )
            }
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer