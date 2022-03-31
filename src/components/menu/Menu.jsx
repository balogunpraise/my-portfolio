import './menu.scss'
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons'

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={menuOpen ? 'menu hidden' : 'menu'}>
        <div className="socials">
            <Facebook style={{"color":"#4064AC", "fontSize" : "40px", "cursor":"pointer"}}
            onClick={()=>setMenuOpen(!menuOpen)}/>
            <LinkedIn style={{"color":"#0077B5", "fontSize" : "40px", "cursor":"pointer"}}
            onClick={()=>setMenuOpen(!menuOpen)}/>
            <Twitter style={{"color":"#0073AF", "fontSize" : "40px", "cursor":"pointer"}}
            onClick={()=>setMenuOpen(!menuOpen)}/>
        </div>
        <ul>
            <li>
                <a href='#intro' onClick={()=>setMenuOpen(!menuOpen)}>Home</a>
            </li>
            <li>
                <a href='#portfolio' onClick={()=>setMenuOpen(!menuOpen)}>Portfolio</a>
            </li>
            <li>
                <a href='#works' onClick={()=>setMenuOpen(!menuOpen)}>Works</a>
            </li>
            <li>
                <a href='#testimonials' onClick={()=>setMenuOpen(!menuOpen)}>Testimonials</a>
            </li>
            <li>
                <a href='#contact' onClick={()=>setMenuOpen(!menuOpen)}>Contact</a>
            </li>
        </ul>    
    </div>
  )
}

export default Menu