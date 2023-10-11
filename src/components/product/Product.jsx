import React, { useState } from 'react'
import './product.css'
// import { useNavigate } from 'react-router-dom';
const Product = () => {

  const [pr, setPr] = useState('');
  const [ca, setCa] = useState('');
  const [mo, setMo] = useState('');
  const [pri, setPri] = useState('');
  const [error, setError] = useState(false);



  const readproductname = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setPr(event.target.value);
  }
  const readcategory = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setCa(event.target.value);
  }

  const readmodify = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setMo(event.target.value);
  }

  const readprice = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setPri(event.target.value);
  }

  const checkfilldata = (event) => {
    event.preventDefault();
    if (pr.trim() === '' || ca.trim() === '' || mo.trim() === '' || pri.trim() === '') {
      setError(true);
      return;
    }
    else {

      const myobj = {
        productname: pr,
        category: ca,
        model: mo,
        price: pri
      }

      fetch("https://productbs-d304b-default-rtdb.firebaseio.com/Productbs.json",
        {
          method: "POST",
          body: JSON.stringify(myobj),
          headers: {
            "content-type": "application/json",
          }
        }
      );
      alert("Record Saved")
    }

  }




return (
  <div>
    <h1 className='a'>Product Details</h1>
    Product name:&nbsp;<input type='text' onChange={readproductname} /><br /><br />
    Category:&nbsp;<input type='text' onChange={readcategory} /><br /><br />
    Model:&nbsp;<input type='text' onChange={readmodify} /><br /><br />
    Price:&nbsp;<input type='number' onChange={readprice} /><br /><br />
    <input type='submit' value="Submit" onClick={checkfilldata} /><br /><br />
    {error && 'Error Occured'}

  </div>
)
}

export default Product
