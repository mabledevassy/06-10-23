import React, { useState } from 'react'

const Productview = () => {

    const [viewd,setViewdata]=useState([]);
    const readproductdata = (event) => {
        fetch("https://productbs-d304b-default-rtdb.firebaseio.com/Productbs.json")
    .then((response) => {
        return response.json()
    }).then((data) => {
        // console.log(data);
        console.log(snapshotToArray(data));
        setViewdata(snapshotToArray(data));
    })
    }
    function snapshotToArray(snapshot){
        const array=[];
    
        Object.keys(snapshot).forEach((key)=>{
    array.push(snapshot[key]);
        });
        return array;
      } 
    
  return (
    <div>
        <input type='button' value='view' onClick={readproductdata}/>
      <br/>
      <br/>
      <table border="1">
        <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Model</th>
        <th>Price</th>
        </tr>
       {viewd.map((value,index) => {
            return(
                <tr key={index}>
                   <td>{value.productname}</td>
                   <td>{value.category}</td>
                   <td>{value.model}</td>
                   <td>{value.price}</td>
                  
                   </tr>


            )

        })} 
      </table>
      
    </div>
  )
}

export default Productview
