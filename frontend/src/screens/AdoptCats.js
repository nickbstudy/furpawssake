import React from 'react'
import cats from '../cats'
import Cat from '../components/Cat'
import { Row, Col } from 'react-bootstrap'

const AdoptCats = () => {

    

    return (
    <>
        <h1>Cats available:</h1>
        <Row>
            {cats.map(cat => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Cat cat={cat}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default AdoptCats