import { Code, Laptop, Person2, Search, ShoppingBag } from '@mui/icons-material';
import { useEffect ,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Searchpage from '../page/Searchpage';

function NavScroll() {
  const [search, setsearch] = useState('')
  
  const nevigate = useNavigate()

  const handelclick = () => {
    nevigate("/cart")
  }
  
  const handelsearch = () => {
    nevigate("/search")
  }

 

  return (

    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary navbar-fixed-top">
      <Container fluid className='dark'>
        <Navbar.Brand className='navs' onClick={()=>nevigate("/")}>X CART</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll justify-content-end">
          <Form className="d-flex search ms">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
            />
            <Link className='serchbutton' to={`/search/${search}`} onClick={handelsearch}>Search </Link>
          </Form>
        </Navbar.Collapse>
        <Button onClick={() => handelclick()} className='button'>Your Cart <ShoppingBag /></Button>
        
        <Button onClick={()=>nevigate("/dev")}>Developer <Code/> </Button>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
