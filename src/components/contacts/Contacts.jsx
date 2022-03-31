import "./contacts.scss"
import {Mail, Person} from '@material-ui/icons'

const Contacts = () => {
  return (
    <div className="contact" id="contact">
      <div className="form-container">
        <h3>Contact Me</h3>
        <form action="">
          <input className="normal" type="text" placeholder="Name" />
          <input className="normal" type="text" placeholder="Email" />
          <textarea className="text" rows="5" cols="60" name="text" placeholder="Enter text"></textarea>
          <input type="submit" className="submit" value='Hire Me'/>
        </form>
        <div className="media">
          <div className="mail">
            <Mail/>
            <p>balogunpraise2@gmail.com</p>
          </div>
          <div className="phone">
            <Person/>
            <p>+234 70 349 476 51</p>
          </div> 
        </div> 
      </div>
    </div>
  )
}

export default Contacts