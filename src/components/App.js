import React from 'react'
import { Router,Route } from "@reach/router"
import HomePage from './HomePage'
import About from './About'
import {Link} from "gatsby"
import {Helmet} from"react-helmet"

const App = () => {
    return (
        <div>      
       <button>
    <Link to="/app/home">
        Home
    </Link>
     </button>

        </div>
    )
}

export default App
