import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import { setCartItem } from '../Slices/Cartslice';
import { Link } from 'react-router-dom';
import { AddShoppingCart, ShoppingCart } from '@mui/icons-material';

const Singleitemextend = (props) => {

    const [data, setdata] = useState([])

    const dispatch = useDispatch()
    const getdata = async () => {
        const item = await fetch(`https://dummyjson.com/products/category/${props.category}`)
        const response = await item.json()
        setdata(response)
        console.log("data", data)
    }

    useEffect(() => {
        getdata();
    }, [props.category])


    const handelclick = (data) => {
        dispatch(setCartItem(data))
    }
    const click = () => {
        window.scroll(0, 0)
    }


    return (
        <>
        <h1 className='heading'>More Relatable Items</h1>
        <div className='extendproduct'>
            {data.products && data.products.map((data) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.images[0]} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Discount Offer {data.discountPercentage}%</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button className='button' onClick={() => handelclick(data)}>Add <ShoppingCart/></Button>
                        <Link className='links' onClick={click} to={`/singleproduct/${data.id}`}>View</Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
        </>
    )
}

export default Singleitemextend
