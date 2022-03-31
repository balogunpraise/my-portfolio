import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portforlio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import './app.scss'
import Menu from './components/menu/Menu'
import {useState} from 'react'


function App() {
  const [isActive, setIsActive] =useState(true);
  return (
    <div className="App">
      <Topbar menuOpen={isActive} setMenuOpen={setIsActive}/>
      <Menu menuOpen={isActive} setMenuOpen={setIsActive}/>
      <div className="sections">
        <Intro/>
        <Portforlio/>
        <Works/>
        <Testimonials/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
