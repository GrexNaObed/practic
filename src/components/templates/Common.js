import React from 'react'
import { links, tags } from 'src/utils/footer'
import Footer from '../Footer'
import Header from '../Header'

function Common({ children }) {
  return (
    <section className="common_template">
      <div className="container">
        <div className="common_template__inner">
          <Header />
          <div className="common_template__content">
            { children }
          </div>
          <Footer
            links={ links }
            tags={ tags }
          />
        </div>
      </div>
    </section>
  )
}

export default Common