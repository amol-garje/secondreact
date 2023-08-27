import Header from "./Header";
import  "./About.css";
import Skill from "./Skill";
import Educaton from "./Education";
import Project from "./project";
import { useState } from "react";
function About(){



      let[pp1,pv1]=useState("Ab2");
      let[pp2,pv2]=useState("Ab3");
      let[pp3,pv3]=useState("Ab4");



    // Variable for Education..
    let[funck,vari]=useState("Amoll");
    let[funckk,varii]=useState("BBlK");
    // Variable for Skill..
    let[funck1,vari1]=useState("Amoll");
    let[funckk1,varii1]=useState("BBl");
    // Variable for Project..
    let[funck2,vari2]=useState("Amoll");
    let[funckk2,varii2]=useState("move");
     
//     Method For Education
    function Clicked(){
          vari("animate__animated animate__fadeInTopRight Dspl");
      //     varii("BBB");
          vari1("Amoll");
          vari2("Amoll");
          pv1("Abb2");
          pv2("Ab3");
          pv3("Ab4");

    }


    function move(){
         
    }





    // Method for Skill
    function Clicked1(){
        vari1("animate__animated animate__fadeInTopRight Dspl");
        vari("Amoll");
        vari2("Amoll");
        pv1("Ab2");
        pv2("Abb3");
        pv3("Ab4");
      //   varii1("BBB")
      //   varii2("BBB")
  
    }
    // function Clicked1(){
    //     vari1("animate__animated animate__fadeInTopRight Dspl");
    //     vari("A");
    //     vari1("A");
    //     varii1("BBB")
  
    // }
    // Method for Project
    function Clicked2(){
        vari2("animate__animated animate__fadeInTopRight Dspl");
        vari("Amoll");
        vari1('Amoll');
        pv1("Ab2");
        pv2("Ab3");
        pv3("Abb4");
        // varii2("BBB")
  }

    return(
          <Header>
             <div className="Ab1">

              <div className={pp1+" animate__animated animate__backInLeft"}>
                   <div className={funck}>
                   <Educaton ></Educaton>
                   </div>
                  <div className={funckk}>
                  <p onClick={Clicked}>Education</p> 
                    </div>             
              </div>
              <div className={pp2+" animate__animated animate__backInLeft"}>
              <div className={funck1}>
                   <Skill></Skill>
                   </div>
                  <div className={funckk1}>
                  <p onClick={Clicked1}>Skill</p> 
                    </div>     
              </div>
              <div className={pp3+" animate__animated animate__backInLeft"}>
              <div className={funck2}>
                   <Project/>
                   </div>
                  <div className={funckk2}>
                  <p onClick={Clicked2}>Project</p> 
                    </div>    
              </div>

             </div>
          </Header>
    )
}
export default About;