import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navbox = () => {
  return (
    <Nav className='navbox'  >
      <Nav.Item className='navboxtab'>
        <h5>Quick Search</h5>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"laptop"}`}className='links'>Laptops</Link>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"bags"}`} className='links'>Hand Bags</Link>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"watch"}`} className='links'>Watches</Link>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"shoe"}`} className='links'>Sneakers</Link>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"shirt"}`} className='links'>Shirts </Link>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"sunglasses"}`} className='links'>Sunglass </Link>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"furniture"}`} className='links'>Furniture</Link>
      </Nav.Item>
      <Nav.Item className='navboxtab'>
        <Link to={`/search/${"lamp"}`} className='links'>Lamps</Link>
      </Nav.Item>
      
    </Nav>
  )
}

export default Navbox
