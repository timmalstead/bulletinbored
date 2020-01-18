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
      <ModalContent className="animated bounceIn">
        <p>
          Bulletin Bored is a project created to further my understanding of
          React hooks and GraphQL.
        </p>
        <p>
          Intentionally Spartan, the focus is on leaving and receiving notes for
          the public.
        </p>
        <p>Like it? Leave me a note or email timmalstead at gmail dot com.</p>
      </ModalContent>
    </Modal>
  )
}

export default About
