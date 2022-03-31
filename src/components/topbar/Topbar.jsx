import { useState } from 'react'
import './topbar.scss'
import CommonButton from '../commonButton/CommonButton';



const Topbar = ({menuOpen, setMenuOpen}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }
  
  const getMenu =()=>{
    setMenuOpen(!menuOpen)
  }
  
  return (
    <div className={isScrolled ? "topbar scrolled"  : "topbar active"}>
      <div className="left"><a className={isScrolled?'logo scrolled':'logo'} href='#intro'>craftelites</a>
      {/* <Person/>
      <span style={{"marginRight":"10px"}}>+234 70 349 475 51</span>
      <Mail/>
      <span>balogunpraise2@gmail.com</span> */}
      </div>
      <div className="right">
        <CommonButton link={'#contact'}/>
        <div className={menuOpen? "hamburger" : "hamburger active"} onClick={getMenu}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  )
}

export default Topbar