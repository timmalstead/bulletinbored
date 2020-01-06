import React from "react"
import { Link } from "react-router-dom"

const About = props => {
  return (
    <div>
      <Link
        onClick={() =>
          props.showElement({
            navbar: true,
            allNotes: true,
            newNote: false,
            editNote: false
          })
        }
        to="/"
      >
        Home
      </Link>
      <p>All about Tim</p>
    </div>
  )
}

export default About
