import "./Header.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import Contact from "./Contact";
import img1 from "./customer.png";
import cu from "react-router-dom";


function Header(s){

    let ff="ch2  "+s.className;
    return(
        <div className="Parent">
         <div className="ch1">
            <dl>
                <img src={img1}/>
                <div class="a"><a href="https://drive.google.com/file/d/1S02rTUzVoJ-sOVhMZE628QJyuienKvZC/view?usp=drive_link">Download Resume</a></div>
                <div class="b">
                    <hr></hr>
                <Link to="/Home">HOME</Link><br></br><br></br>
                <hr></hr>
                <Link to="/ABOUTS">ABOUTS</Link><br></br><br></br>
                <hr></hr>
                <Link to="/CONTACTS">CONTACTUS</Link><br></br><br></br>
               
                </div>
            </dl>
         </div>

         <div className={ff}>       
               {s.children}
         </div>
         <div className="third">       
                 <a href="https://www.linkedin.com/in/amol-garje-21b92a231/"><i class="fa-brands fa-linkedin fa-xl"/></a><br></br><br></br><br></br>
                 <a href="https://github.com/amol-garje"><i class="fa-brands fa-github fa-xl"/></a><br></br><br></br><br></br>
                 <a href=""><i class="fa-solid fa-envelope fa-xl" /></a><br></br><br></br><br></br>
                 <a href="CONTACTS"><i class="fa-solid fa-mobile-screen-button fa-xl"></i></a>
               </div>
          </div>
    )
}
export default Header;