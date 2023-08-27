import "./Contact.css";
import Header from "./Header";
import fjk from "./customer.png";
function Contact(){
    return(
        <Header className="A">
           <div class="di">
            <fieldset>
                  <legend>Instruction</legend>
              <form>

                  <table>
                    <tr> <td>Name</td></tr>
                    <tr>
                        <td><input type="text" placeholder="Amol Kailas Garje"></input></td>
                    </tr><br></br>
                    <tr><td>Email</td></tr>
                     <tr>
                        <td><input type="mail" placeholder="Amol@123gmail.com"></input></td>
                    </tr><br></br>
                    <tr> <td>Susesion</td></tr>
                     <tr>
                        <td><textarea  rows={5} cols={96} placeholder="Please Write Note" ></textarea></td>
                    </tr><br></br>
                    <tr> <td>Submit</td></tr>
                    <tr>
                        <input id="submit" type="submit"></input>
                    </tr>
                  </table>

              </form>
              </fieldset>
              <img className="im" src={fjk}/>
    
           </div>
        </Header>
    )
}
export default Contact;