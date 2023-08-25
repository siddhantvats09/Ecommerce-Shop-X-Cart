import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { Delete, FreeBreakfast, Home } from '@mui/icons-material';
import { deletecartitems } from '../Slices/Cartslice';

const Cartitems = () => {
  const dispatch = useDispatch()
  const nevigate = useNavigate()
  const product = useSelector(state => state.cartitems);


  const deletes = (id) => {
    dispatch(deletecartitems(id))
  }
  return (
    <div>

      <h1 className='heading'>YOUR CART</h1>
      {product.length ? (<h4 className='h4'>Your Cart Have {product.length} Items</h4>) : (<Button onClick={() => nevigate("/")}>GO TO HOME <Home /> PAGE YOUR CART IS EMPTY <FreeBreakfast /> </Button>)}
      {product && product.map((item) => (
        <>
          <Card key={item.id}>
            <Card.Header>{item.category}</Card.Header>
            <Card.Header>${item.price}</Card.Header>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button className='button' onClick={() => nevigate("/")} variant="primary">Go Home</Button>
              <Link className='links' to={`/singleproduct/${item.id}`}>View Product</Link>
              <Button className='button btn' onClick={() => deletes(item.id)} variant="primary"><Delete /></Button>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  )
}

export default Cartitems
