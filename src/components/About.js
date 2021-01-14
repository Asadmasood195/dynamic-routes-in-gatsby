import React from 'react'
import {Link} from "gatsby"
import data from './data'
import { useEffect } from 'react'
import { useState } from 'react'


const About = (props) => {
const [dataItem, setData] = useState()

useEffect(() => {
   
    data.filter((itm)=>{
        if(itm.id === props.id){
            setData(itm)
            return itm
        }
    })
}, [])

console.log(dataItem)
    return (
        <div>
            <Link to="/app/home"><button>Back</button></Link>
            <br/>


            <h3>{dataItem && dataItem.name}</h3>
            <p>Price: {dataItem && dataItem.price}</p>
            <img src={dataItem && dataItem.imgUrl} />
           
        </div>
    ) 
}

export default About
