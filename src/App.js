import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transferdata from "./components/Transferdata";
import Course from "./components/course/Course";
import Login from "./components/login/Login";
import Logindata from "./components/login/Logindata";
import Home from "./components/Home/Home";
import Book from "./components/book/Book";
import Bookview from "./components/book/Bookview";
import Product from "./components/product/Product";
import Productview from "./components/product/Productview";
import React, { useEffect, useState } from "react";

function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  
  useEffect(()=>{
    const storevalue=localStorage.getItem("isloggedin");
    if(storevalue=="1")
    {
      setIsloggedin(true);
    }
  },[])




const  Logincheck=(un,pwd) =>{
  localStorage.setItem("isloggedin",'1');
  setIsloggedin(true);
}
const  LogOutcheck=(event) =>{
  localStorage.setItem("isloggedin",'1');
  setIsloggedin(false);
}



  return (
    <div>

      <React.Fragment>
        {!isloggedin && <Login checkLogin={Logincheck} />}
        {isloggedin && <Home checkLogout={LogOutcheck} />}
      </React.Fragment>

      {/* <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/Ldata'} element={<Logindata />}></Route>
          <Route path={'/course'} element={<Course />}></Route>
          <Route path={'/Home'} element={<Home />}></Route>

          <Route path={'/b'} element={<Book/>}></Route>
          <Route path={'/v'} element={<Bookview/>}></Route>
        
          <Route path={'/'} element={<Product/>}></Route>
          <Route path={'/po'} element={<Productview/>}></Route> 
          <Transferdata username="Mable" password="Hi" usertype="Admin" />
          <Login/>
          <Course/>
          <Logindata></Logindata>
          <Home/>

        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
