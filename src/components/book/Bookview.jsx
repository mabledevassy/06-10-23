import React, { useState } from 'react'

const Bookview = () => {
    const [viewd,setViewdata]=useState([]);
    const readbookdata = (event) => {
        fetch("https://sampledbcs-e710b-default-rtdb.firebaseio.com/book.json")
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
      <input type='button' value='view' onClick={readbookdata}/>
      <br/>
      <br/>
      <table border="1">
        <tr>
        <th>Bookname</th>
        <th>Author</th>
        <th>Publisher</th>
        </tr>
       {viewd.map((value,index) => {
            return(
                <tr key={index}>
                   <td>{value.bookname}</td>
                   <td>{value.autor}</td>
                   <td>{value.publisher}</td>
                   </tr>


            )

        })} 
      </table>
    </div>
  )
}

export default Bookview
