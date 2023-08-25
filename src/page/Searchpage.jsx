import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartItem } from '../Slices/Cartslice';

const Searchpage = () => {
    const dispatch=useDispatch()
    const params=useParams()
    const [data, setdata] = useState(null)

    const getdata = async() => {
        const item = await fetch(`https://dummyjson.com/products/search?q=${params.searchID}&limit=10`)
        const response = await item.json()
        setdata(response)
      
    }
    
    useEffect(() => {
        getdata();
    },[params.searchID])

    const cartclick = (item) => {
        dispatch(setCartItem(item))
      } 
       
  return (
    <>
         <div className='card-container'>
      {data && data.products.map((item) => (
        <div key={item.id}>
          <Card className='card' >
            <Card.Img variant="top" src={item.images[0]} height={'250px'} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Rating :{item.rating}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button onClick={() => cartclick(item)} className='button'>Add to cart</Button>
              <Link className="links" to={`/singleproduct/${item.id}`}>View Product</Link>
            </Card.Body>
          </Card>
        </div>
      ))}

    </div>
    </>
  )
}

export default Searchpage
