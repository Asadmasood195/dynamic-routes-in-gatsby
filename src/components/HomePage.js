import React from "react"
import { Link } from "gatsby"
import data from "./data"
// import "./style.css"




const HomePage = () => {
  return (
    <div className="container">
      <Link to="/">
        <button> back</button>
      </Link>
 


    


<div class="container mx-auto ">
        <div class="grid
         md:grid-cols-3
         lg:grid-cols-4 
          gap-y-3
         gap-x-3 
         mt-5
         
         ">

      {data.map(item => {
        return (
          <div class="red bg-gray-100 pb-3">
         <Link to={`/app/about/${item.id}`}><img class="lg:w-96 lg:p-4 md:w-200" src={item.imgUrl} alt=""/></Link> 
          <h2 class="text-2xl text-center">{item.name}</h2>
          <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
        )
      })}
     
      </div>

      <h1>Hy there</h1>
    </div>
    </div>
  )
}

export default HomePage
