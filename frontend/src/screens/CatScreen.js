import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import cats from '../cats'

const CatScreen = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const cat = cats.find(p => p._id === id)
    

    return <>
        <Button type="button" className="btn btn-info" style={{borderRadius: '8px'}} onClick={() => navigate('/adopt/cats')}>Go Back</Button>
        <Row>
            <Col md={6}>
                <Image src={cat.image} alt={cat.name} fluid className="py-3" />
            </Col>
            <Col md={6}>
                {/* <ListGroup.Item> */}
                    <h3>{cat.name}</h3>
                    <p>{cat.description}</p>
                
            </Col>

        </Row>
    
    </>
}

export default CatScreen