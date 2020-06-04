import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const DetailsPokemon = (props) => {
  const state = props.location.state
  console.log(props)
  const peso = state.peso / 10
  const altura = state.altura / 10
  return (

    <div className='container mt-4'>
      <Card className='card border-primary'>
        <Card.Body className='text-primary card border-primary'>
          <Row>
            <Col xs={6} md={6}>
              <Card.Title>ID/ {` ${state.id}`}</Card.Title>
            </Col>

            <Col xs={6} md={6}>
              <div className='d-flex justify-content-end'>
                <Link to={{ pathname: '/Pokedex' }}>
                  <button type='button' className='btn btn-danger rounded-circle d-flex justify-content-end '> x</button>
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <Card.Img className='img-fluid rounded mx-auto d-block ' style={{ width: '30%' }} variant='top' src={state.imagenback} />
            </Col>

            <Col xs={12} md={4}>
              <Card.Img className='img-fluid rounded mx-auto d-block ' style={{ width: '30%' }} variant='top' src={state.imagen} />
            </Col>
            <Col xs={12} md={4}>
              <h1>ability</h1>
              <ul>
                {state.habilidades.map((habil, key) => { return <li key={key + 1} className='text-dark'> {habil.ability.name} </li> })}
              </ul>
            </Col>
          </Row>
          <Card.Title>
            Name: {state.nombre}
          </Card.Title>
          <Card.Body className='bg-primary text-white'>
            <Row>
              <Col xs={6} md={4}>
                <h3>
                weight:
                </h3>
                {peso} kg
              </Col>
              <Col xs={6} md={4}>
                <h3>
                height:
                </h3>
                {altura} m
              </Col>
              <Col xs={6} md={4}>
                <h3>
                types:
                </h3>
                {state.tipos.map((tipo, key) => { return <Button key={key + 1} className='ml-2' variant='outline-light'> {tipo.type.name} </Button> })}
              </Col>
            </Row>
          </Card.Body>
        </Card.Body>
        <Card.Footer className='bg-primary'>
        </Card.Footer>
      </Card>
    </div>

  )
}

export default DetailsPokemon
