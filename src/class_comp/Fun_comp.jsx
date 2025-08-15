import React from 'react'
import Firstcomp from './comp1'
import Secondcomp from "./comp2"
const Fun_comp = () => {
    //passing props to first component 
    let user="thirumala"
    let num=7
  return (
    <div>
        <Firstcomp user={user}/>
        <Secondcomp n={num}/>
    </div>
  )
}

export default Fun_comp