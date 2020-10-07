import React, { useEffect } from 'react'
// import TransitionLink from 'gatsby-plugin-transition-link'

import SEO from '../components/seo'
import Nav from '../components/nav'

const AboutPage = () => {
  useEffect(() => {
    if (typeof window === `undefined`) return null

    const title = document.querySelector('.title')

    setTimeout(() => {
      title.classList.add('show')
    }, 175)

    return () => {
      title.classList.remove('show')
    }
  }, [])

  return (
    <>
      {}
      <SEO
        title="Yugvani"
        description="Essays on Contemporary Nepal"
      />

      <div className="about-page">
        <Nav />
        <h1 className="title" data-splitting="">
          /Yugvani/
          <br /> ideas of 
          <br /> Nepal
        </h1>

        <h1 className="subtitle">Essays on science, art, philosophy, politics, & literature for contemporary Nepal</h1>

        
                
      </div>
    </>
  )
}

export default AboutPage
