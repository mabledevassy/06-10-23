import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transferdata from "./components/Transferdata";
import Course from "./components/course/Course";
import Login from "./components/login/Login";
import Logindata from "./components/login/Logindata";
import Home from "./components/Home/Home";
import Book from "./components/book/Book";

function App() {
  return (
    <div>
      {/* <Transferdata username="Mable" password="Hi" usertype="Admin" /> */}
      {/* <Login/> */}
      {/* <Course/>*/}
      {/* <Logindata></Logindata> */}
      {/* <Home/> */}
       <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/Ldata'} element={<Logindata />}></Route>
          <Route path={'/course'} element={<Course />}></Route>
          <Route path={'/Home'} element={<Home />}></Route>
          <Route path={'/b'} element={<Book/>}></Route>
        </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
