import React from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Cat = ({ cat }) => {

    let wording = ""
    if(cat.description.length > 150) {
        wording = cat.description.slice(0, 150) + "..."
    } else {
        wording = cat.description
    }
  return (
    <Card className="my-3 p-1 rounded">
        <LinkContainer to={`/adopt/cats/${cat._id}`}>
            <Card.Img src={cat.image} variant="top" />
        </LinkContainer>
        <Card.Body>
            <LinkContainer to={`/adopt/cats/${cat._id}`}>
                <Card.Title as='div' className="fs-3"><strong>{cat.name}</strong></Card.Title>
            </LinkContainer>
            <Card.Text as='div'>
                {wording}
            </Card.Text>
        </Card.Body>
    </Card>    
  )
}

export default Cat