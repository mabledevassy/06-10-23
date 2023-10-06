import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transferdata from "./components/Transferdata";
import Course from "./components/course/Course";
import Login from "./components/login/Login";
import Logindata from "./components/login/Logindata";

function App() {
  return (
    <div>
      {/* <Transferdata username="Mable" password="Hi" usertype="Admin" /> */}
      {/* <Login/> */}
      {/* <Course/>*/}
      {/* <Logindata></Logindata> */}
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/Home'} element={<Logindata/>}></Route>
          <Route path={'/course'} element={<Course/>}></Route>


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
