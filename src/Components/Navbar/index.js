import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { NavbarStyle, StickyNav } from "./style"

const LinkStyle = {
  color: "#b0a8a8",
  textDecoration: "none",
  margin: "0 3em"
}

const Navbar = props => {
  const [isSticky, setSticky] = useState(false)

  const content = (
    <div>
      <Link
        style={LinkStyle}
        onClick={() =>
          props.showElement({
            navbar: true,
            allNotes: true,
            newNote: false,
            editNote: [false, null]
          })
        }
        to="/about"
      >
        About
      </Link>
      <h4>Bulletin Bored</h4>
      <Link
        style={LinkStyle}
        onClick={() =>
          props.showElement({
            navbar: true,
            allNotes: true,
            newNote: true,
            editNote: [false, null]
          })
        }
      >
        New Note
      </Link>
    </div>
  )

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
    return () => window.removeEventListener("scroll", scrollListener)
  })

  return (
    <div>
      {isSticky ? (
        <StickyNav className="navbar">{content}</StickyNav>
      ) : (
        <NavbarStyle className="navbar">{content}</NavbarStyle>
      )}
    </div>
  )
}

export default Navbar
