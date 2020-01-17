import React, { useState } from "react"
import { Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import AllNotes from "./Components/AllNotes"
import NewNote from "./Components/NewNote"
import EditNote from "./Components/EditNote"
import About from "./Components/About"

import "./App.css"

const App = () => {
  const [visible, showElement] = useState({
    navbar: true,
    allNotes: true,
    newNote: false,
    editNote: [false, [null]]
  })

  const [editInfo, editOne] = useState(null)

  return (
    <div>
      <Route
        exact
        path={"/about"}
        render={() => <About showElement={showElement} />}
      ></Route>
      {visible.navbar ? <Navbar showElement={showElement} /> : null}
      {visible.newNote ? <NewNote /> : null}
      {visible.editNote[0] ? (
        <EditNote showElement={showElement} editInfo={editInfo} />
      ) : null}
      {visible.allNotes ? (
        <AllNotes showElement={showElement} editOne={editOne} />
      ) : null}
    </div>
  )
}

export default App
