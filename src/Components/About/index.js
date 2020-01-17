import React from "react"
import { Link } from "react-router-dom"

import { Modal, ModalContent } from "./style"

const About = () => {
  const LinkStyle = {
    color: "#b0a8a8",
    textDecoration: "none"
  }

  return (
    <Modal as={Link} to="/" style={LinkStyle}>
      <ModalContent>
        <p>
          Bulletin Bored is a project created to further my understanding of
          React hooks and GraphQL.
        </p>
        <p>
          Intentionally Spartan, the focus is on leaving and receiving notes for
          the public.
        </p>
        <p>
          Like it? Drop me a line at timmalstead at gmail dot com or leave me a
          note.
        </p>
      </ModalContent>
    </Modal>
  )
}

export default About
