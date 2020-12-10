import React from 'react'
import PropTypes from 'prop-types'
import TransitionLink from 'gatsby-plugin-transition-link'

import useIntersection from '../hooks/useIntersectionobserver'

const LinkNext = ({ path, title }) => {
  const { observerEntry, refObserver } = useIntersection({ threshold: 0 })
  const intersected = observerEntry.isIntersecting

  if (!path || !title) {
    return (
      <a
        href="https://www.nischalmainali.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className={`link-next ${intersected ? 'show' : null}`}
      >
        <div className="link-next__wrapper" ref={refObserver}>
          <div className="link-next__label">Made by</div>
          <div className="link-next__title" data-splitting="">
            Nischal
          </div>
        </div>
      </a>
    )
  } else {
    return (
      <TransitionLink
        exit={{
          length: 0.05,
          delay: 0,
        }}
        entry={{
          delay: 0.05,
        }}
        to={path}
        className={`link-next ${intersected ? 'show' : null}`}
      >
        <div className="link-next__wrapper" ref={refObserver}>
          <div className="link-next__label">Read on</div>
          <div className="link-next__title" data-splitting="">
            {title}
          </div>
        </div>
      </TransitionLink>
    )
  }
}

LinkNext.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
}

export default LinkNext
