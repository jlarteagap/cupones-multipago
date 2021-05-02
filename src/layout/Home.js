import React from 'react'
import HomePage from '../component/Home/HomePage'
const Home = (props) => {
console.log("🚀 ~ file: Home.js ~ line 4 ~ Home ~ props", props)
    
    return(
        <HomePage homeState = {props.homeState}/>
    )
}
export default Home;