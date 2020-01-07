import React from "react"
import { Link } from "react-router-dom"

const Navbar = props => {
  return (
    <nav>
      <Link
        onClick={() =>
          props.showElement({
            navbar: false,
            allNotes: false,
            newNote: false,
            editNote: [false, null]
          })
        }
        to="/about"
      >
        About
      </Link>
      <Link
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
    </nav>
  )
}

export default Navbar
