'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const GoHome = React.forwardRef(({ onClick, href }, ref) => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href) // tell it where to navigate to
    router.refresh() // tell it refresh current route, which should be '/'
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <a href={href} onClick={handleClick} ref={ref}>
      Home
    </a>
  )
})

export default GoHome