import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CardsPokemon = ({ name, picture, number, types, abilities, pictureBack, weightPokemon, heightPokemon, evolution }) => {
  return (
    <div className='col-12 col-sm-6 col-md-3 mt-4'>
      <Card className='card border-primary'>
        <Link to={{
          pathname: '/details',
          state: {
            nombre: name,
            imagen: picture,
            id: number,
            tipos: types,
            habilidades: abilities,
            imagenback: pictureBack,
            peso: weightPokemon,
            altura: heightPokemon,
            evolucion: evolution
          }
        }}
        >
          <Card.Img className='img-fluid rounded mx-auto d-block ' style={{ width: '60%' }} variant='top' src={picture} />
        </Link>
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
    </div>
  )
}
export default CardsPokemon
