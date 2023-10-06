import React from 'react'
import './Tranferdata.css'

const Transferdata = (props) => {
  return (
    <div>
     <h1 className='aa'>Welcome</h1> 
    <p>
        
       Username:&nbsp; {props.username}<br/>
        Password:&nbsp;{props.password}<br/>
       Usertype:&nbsp;{props.usertype}
        </p>
       
        
    
    </div>
  )
}

export default Transferdata
