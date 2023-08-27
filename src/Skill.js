import About from "./About";
import "./Skill.css";
function Skill(){
    return(
        <div>
            <fieldset className="WER">
            <details>
               <summary> Language's: </summary>
               <hr></hr>
                <h6>Java</h6>
                <hr></hr>
                <h6>JavaScript</h6>
            </details>
            <hr></hr>
            <details>
            <summary>Technology:</summary>
            <hr></hr>
                <h6>HTML</h6>
                <hr></hr>
                <h6>CSS</h6>
                <hr></hr>
                <h6>JSP</h6>
                <hr></hr>
                <h6>Servlet</h6>
                <hr></hr>
                <h6>JDBC</h6>
            </details>
            <hr></hr>
            <details>
            <summary>FrameWorks:</summary>
            <hr></hr>
                <h6>Spring-Boot</h6>
                <hr></hr>
                <h6>React</h6>
                <hr></hr>
            </details>
            <hr></hr>
            <details>
            <summary>DataBase:</summary>
            <hr></hr>
                <h6>MySql</h6>
            </details>
            <hr></hr>
            <details>
            <summary>Operating Systems:</summary>
            <hr></hr>
                <h6>Window</h6>
                <hr></hr>
                <h6>Linux</h6>
            </details>
            </fieldset>

        </div>
    );
}
export default Skill;