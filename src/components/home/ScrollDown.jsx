
import { scroll } from '../../assets/assets'

const ScrollDown = () => {
  return (
   <div className="home__scroll">
    <a href="#about" className="home__scroll-button button--flex">
        <img src={scroll} alt="Scroll down" className='home__scroll-mouse' />
        <span className='home__scroll-name'>Scroll Down</span>
        <i className='uil uil-arrow-down home__scroll-arrow'></i>
    </a>
    {/* sgvdjvdgj */}
   </div>
  )
}

export default ScrollDown