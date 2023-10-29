import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar =({icon,title})=>{
   

 
    return (
      <nav className='navbar bg-primary'>
        <h1>
            <i className={icon} aria-hidden="true">{title}</i>
        </h1> 
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        </nav>
    )
  
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github'

};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar