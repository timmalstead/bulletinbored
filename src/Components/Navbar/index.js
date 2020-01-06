import React from "react"
import { Link } from "react-router-dom"

const Navbar = props => {
  return (
    <nav>
      <Link onClick={() => props.showElement(false)} to="/about">
        About
      </Link>
      <Link
        onClick={() =>
          props.showElement({
            navbar: true,
            allNotes: true,
            newNote: true,
            editNote: false
          })
        }
      >
        New Note
      </Link>
      <Link
        onClick={() =>
          props.showElement({
            navbar: true,
            allNotes: true,
            newNote: false,
            editNote: true
          })
        }
      >
        Edit Note
      </Link>
    </nav>
  )
}

export default Navbar
