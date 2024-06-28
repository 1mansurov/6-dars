import './Navbar.css';
import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
                <div className="container nav__content">
                <div className='logo' ><a href="">A</a></div>
                <ul className='nav-content__list'>
                    <NavLink active to="/">Home</NavLink>
                    <NavLink to="/about">About As</NavLink>
                    <NavLink to="/projekts">Projects</NavLink>
                    <NavLink to="/address">Address</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                </ul>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
