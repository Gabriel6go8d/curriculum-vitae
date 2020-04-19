import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Section5A(prop) {
    return (
        <div className='col-12 col-md-4'>
            <div className='row justify-content-center ml-2 mr-2 mt-5'>
                <Card style={{ width: '15rem', height: '350px' }}>
                    <Card.Img style={{}} variant="top" src={prop.img} alt="Primeros-Pasos" />
                    <Card.Body>
                        <Card.Title>{prop.title}</Card.Title>
                        <Card.Text style={{height: '80px'}}>
                            {prop.description}
                        </Card.Text>
                        <Button className='mt-3' variant="warning" href={prop.direction}>Visitar</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Section5A
