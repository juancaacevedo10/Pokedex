import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CardsPokemon = ({ name, picture, number, types, abilities, pictureBack, weightPokemon, heightPokemon, evolution }) => {
  console.log(evolution)
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className='col-12 col-sm-6 col-md-3 mt-4'>
      <Card onClick={handleShow} className='card border-primary'>
        <Card.Img className='img-fluid rounded mx-auto d-block ' style={{ width: '60%' }} variant='top' src={picture} />
        <Card.Body className='text-primary card border-primary'>
          <Card.Title>ID/{number}</Card.Title>
          <Card.Text>
            Name:  {name}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-primary'>
          <small id='list-types' className='text-white'>{types.map((tipos, key) => { return <Button key={key + 1} className='ml-3' variant='outline-light'> {tipos.type.name} </Button> })}
          </small>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Nombre: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>

          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Card.Img className='img-fluid rounded mx-auto d-block ' style={{ width: '60%' }} variant='top' src={picture} />
              </Col>
              <Col xs={6} md={4}>
                Id/  {number}
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                <p>Type:
                  {types.map((tipos) => { return ` ${tipos.type.name} ` })}
                </p>
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default CardsPokemon
