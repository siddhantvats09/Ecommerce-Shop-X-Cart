import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Image = ({ img }) => {
  return (

    <Card style={{ width: '18rem', backgroundColor: "#004e4e", border: 'none' }}>
      <Card.Img variant="top" src={img} />
    </Card>
  )
}

export default Image
