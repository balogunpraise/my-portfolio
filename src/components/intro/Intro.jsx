import './intro.scss'
import { useEffect, useRef } from 'react'
import {KeyboardArrowDown} from '@material-ui/icons'
import { init } from 'ityped'
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current,
        { showCursor: true,
         backDelay:1500,
         backSpeed: 50,
         strings: ['Fullstack Developer', 'Designer'] })
  }, [])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src='https://taukeeredit.com/wp-content/uploads/2019/08/fire-paper.png' alt=''/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I'm</h2>
          <h1>Praise Balogun</h1>
          <h3>Freelance <span ref ={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <KeyboardArrowDown className='arrow'/>
        </a>
      </div>
    </div>
  )
}

export default Intro