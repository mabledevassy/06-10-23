import React from 'react'
import './home.css'
import Header from '../header/Header'
const Home = (props) => {
  return (
    <div className='s'>
      <Header xxx={props.checkLogout}/>
      <h1 className='t1'>Welcome to Adminpanel</h1>
    </div>
  )
}

export default Home
