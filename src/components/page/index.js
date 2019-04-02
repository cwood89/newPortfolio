import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Intro from "../intro"
import Header from "../header"
import Panel from "../panel"
import Footer from "../footer"

function Page() {
  return (
    <Router>
      <div>
        <Intro />
        <Header />
        <Panel />
        <Footer />
      </div>
    </Router>
  )
}
export default Page