import React from 'react'
import { links, tags } from 'src/utils/footer'
import Footer from '../Footer'
import Header from '../Header'

function Common({ children }) {
  return (
    <section className="common_template">
      <div className="container">
        <Header />
        { children }
        <Footer
          links={ links }
          tags={ tags }
        />
      </div>
    </section>
  )
}

export default Common