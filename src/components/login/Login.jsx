import React, { useState } from 'react'



const Login = (props) => {

    const [un, setUn] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(false);
    

    const readusername = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setUn(event.target.value);
    }

    const readpassword = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setPwd(event.target.value);
    }


    const checkfilldata = (event) => {
        event.preventDefault();
        if (un.trim() === '' || pwd === '') {
            setError(true);
            return;
        }
        else {

            // navigate("/Home");
            props.checkLogin(un,pwd);
        }
    }



    return (
        <div>
            <h1>SIGN IN</h1>
            <form >
                Username:<input type='text' onChange={readusername} /><br /><br />
                password:<input type='password' onChange={readpassword} /><br /><br />


                <button type='submit' onClick={checkfilldata}>Login</button><br /><br />
                {error && 'Error Occured'}


            </form>
        </div>
    )
}

export default Login
