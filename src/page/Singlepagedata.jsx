import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from './Image';
import { Button } from 'react-bootstrap';
import { setCartItem } from '../Slices/Cartslice';
import Singleitemextend from './Singleitemextend';
import { ShoppingCart, ShoppingCartTwoTone } from '@mui/icons-material';



const Singlepagedata = () => {
  const [data, setdata] = useState(null)
  const product = useSelector(state => state.products);
  const params = useParams();
  console.log("single page id", params.productID)

  const dispatch = useDispatch()

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${params.productID}`);
      const data = await response.json();
      setdata(data)
      console.log(data)
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [params.productID]);
  if (data === null) {
    return <div><h1>Loading.....</h1></div>
  }

  const cartclick = (data) => {
    console.log("cart click")
    // const {title,description,price}=data
    // dispatch(setCartItem({title:title,description:description,price:price}))
    dispatch(setCartItem(data))

  }

  return (
    <>
      <div className='singlepage' key={data.id}>
        <div className='maincard' key={data.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.images[0]} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>PRICE : ${data.price}</ListGroup.Item>
              <ListGroup.Item> Stock :{data.stock}</ListGroup.Item>
              <ListGroup.Item> brand : {data.brand}</ListGroup.Item>
              <ListGroup.Item>Discount Avaliable {data.discountPercentage}%</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button onClick={() => cartclick(data)} className='button'>Add To <ShoppingCartTwoTone/> </Button>
              <Link className='button links' to="/">Go BAck</Link>
            
            </Card.Body>
          </Card>
        </div>

        <div className='singleimage'>
          {data && data.images.map((img) => (
            <div className='imagetheme'>
              <Image img={img} />
            </div>
          ))}
        </div>
      </div>
      <Singleitemextend category={data.category} />
    </>
  )
}

export default Singlepagedata
