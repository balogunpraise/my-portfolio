import PortforlioLIst from '../portfolioList/PortforlioLIst'
import './portfolio.scss'
import { useState, useEffect } from 'react'
import {featuredPortfolio, webPortfolio, mobilePortfolio} from '../../data'

const Portfolio = () => {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([]);
  const list = [
    {
      id : "featured",
      title : "Featured"
    },
    {
      id : "web",
      title : "Web App"
    },
    {
      id : "mobile",
      title : "Mobile App"
    }
  ]
  
  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      default:
        setData(featuredPortfolio)
        break;

    }
  }, [selected])
  
  return (
    <div className='portfolio' id='portfolio'>
      <ul>
        {list.map(item => (
          <PortforlioLIst title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}/>
        ))}
      </ul>
      <div className="container">
          {data.map(x => (
            <div className="item">
              <img src={x.img} alt={x.title} />
              <h3>{x.title}</h3>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Portfolio