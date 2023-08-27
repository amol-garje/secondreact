import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import "./App.css";
function App(){
    return(
           <div>
               <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="CONTACTS" Component={Contact}></Route>
                <Route path="ABOUTS" Component={About}></Route>
                <Route path="Home" Component={Home}></Route>
               </Routes>
           </div>
    )
}
export default App; 