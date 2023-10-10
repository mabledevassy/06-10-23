import React, { useState } from 'react'
import './book.css'
const Book = () => {

    const [bo, setBo] = useState('');
    const [au, setAu] = useState('');
    const [pu, setPu] = useState('');
    const [er, setEr] = useState(false);



    const readbookname = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        setBo(event.target.value)
    }

    const readauthorname = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        setAu(event.target.value)
    }

    const readpublisher = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        setPu(event.target.value)
    }

    const checkfilldata = (event) => {
        event.preventDefault();
        if (bo.trim() === '' || au.trim() === '' || pu.trim() === '') {
            setEr(true);
            return;
        }
        else {
            const myobj = {
                bookname: bo,
                autor: au,
                publisher: pu
            }

            fetch("https://sampledbcs-e710b-default-rtdb.firebaseio.com/book.json",
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
            <h1 className='t'>Book Details</h1>
            <form>
                Bookname:<input type='text' onChange={readbookname} /><br />
                Author:<input type='text' onChange={readauthorname} /><br />
                Publisher:<input type='text' onChange={readpublisher} /><br />
                <button type='submit' onClick={checkfilldata}>Save</button>

            </form>
            {er && 'Error occured'}
        </div>
    )
}

export default Book
