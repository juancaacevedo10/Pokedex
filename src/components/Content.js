import React, { useState, useEffect } from 'react'
import CardsPokemon from './CardsPokemon'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, FormControl } from 'react-bootstrap'
import Loading from './Loading'

const Content = () => {

  let [pokemons, setPokemons] = useState([])
  let [pokeBackup, setPokeBackup] = useState([])
  let [evolution, setEvolution] = useState([])
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const arrayPokemon = []
    const arrayEvolution = []
    const fetchData = async () => {
      for (let i = 1; i < 26; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await response.json()
        arrayPokemon.push(data)
        const responseEvolution = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${i}`)
        const dataEvolution = await responseEvolution.json()
        arrayEvolution.push(dataEvolution)
      }
      setPokemons(arrayPokemon)
      setPokeBackup(arrayPokemon)
      setEvolution(arrayEvolution)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }
    fetchData()

  }, [])

  const handleChange = (e) => {
    const names = e.target.value
    const data = pokeBackup
    const result = data.filter(pokemon =>
      pokemon.name.indexOf(names) > -1)
    setPokemons(result)
  }

  console.log(evolution)

  if (loading) {
    return <Loading />
  }
  return (

    <div>
      <h1>Pokedex</h1>
      <Form inline>
        <FormControl type='text' placeholder='Search' className=' mr-sm-2' onChange={handleChange} />
        <Button type='submit'>Submit</Button>
      </Form>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-12'>
            <CardGroup>
              {pokemons.map((pokemon, index) => {
                return <CardsPokemon
                  key={index}
                  name={pokemon.name}
                  picture={pokemon.sprites.front_default}
                  number={pokemon.id}
                  types={pokemon.types}
                  abilities={pokemon.abilities}
                  pictureBack={pokemon.sprites.back_default}
                  weightPokemon={pokemon.weight}
                  heightPokemon={pokemon.height}
                  evolution={evolution.chain}
                />
              })}
            </CardGroup>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Content
