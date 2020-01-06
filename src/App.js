import React, { useState } from "react"
import { Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import AllNotes from "./Components/AllNotes"
import NewNote from "./Components/NewNote"
import EditNote from "./Components/EditNote"
import About from "./Components/About"

const App = () => {
  const [visible, showElement] = useState({
    navbar: true,
    allNotes: true,
    newNote: false,
    editNote: false
  })

  return (
    <div>
      {visible.navbar ? <Navbar showElement={showElement} /> : null}
      {visible.newNote ? <NewNote /> : null}
      {visible.editNote ? <EditNote /> : null}
      {visible.allNotes ? <AllNotes /> : null}
      <Route
        exact
        path={"/about"}
        render={() => <About showElement={showElement} />}
      ></Route>
    </div>
  )
}

export default App
