import React, { useState } from 'react'

const Course = () => {

    const [co, setCo] = useState('');
    const [du, setDu] = useState('');
    const [fe, setFe] = useState('');

    const readcoursename = (event) => {
        console.log(event.target.value);
        setCo(event.target.value);
    }

    const readduration = (event) => {
        console.log(event.target.value);
        setDu(event.target.value);
    }
    
    const readfeeamount = (event) => {
        console.log(event.target.value);
        setFe(event.target.value);
    }
    

    return (
        <div>
            <form >
                Coursename:<input type='text' onChange={readcoursename} /><br />
                Duration:<input type='text' onChange={readduration}/><br />
                Feeamount:<input type='number' onChange={readfeeamount}/><br/>
                <button type='submit'>Login</button>

            </form>
        </div>
    )
}

export default Course
