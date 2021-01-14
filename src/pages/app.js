import React from "react"
import { Router,Route } from "@reach/router"
import HomePage from "../components/HomePage"
import About from "../components/About"


const App = () => {
  return (
      <Router >
        <HomePage path="/app/home" />
        <About path="/app/about/:id" component={About} />
      </Router>

  )
}

export default App