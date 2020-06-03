import React, { useState, useEffect } from 'react'
import CardsPokemon from './CardsPokemon'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormControl } from 'react-bootstrap'
import Loading from './Loading'

const Content = () => {
  const [data, setData] = useState({
    pokemons: [],
    pokeBackup: [],
    evolution: [],
    loading: false
  })
  // let [pokemons, setPokemons] = useState([])
  // let [pokeBackup, setPokeBackup] = useState([])
  // let [evolution, setEvolution] = useState([])
  // let [loading, setLoading] = useState(false)

  useEffect(() => {
    setData({
      loading: true
    })
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
      setTimeout(() => {
        setData({
          pokemons: arrayPokemon,
          pokeBackup: arrayPokemon,
          evolution: arrayEvolution,
          loading: false
        })
      }, 1500)
    }
    fetchData()
  }, [])

  const handleChange = (e) => {
    const names = e.target.value
    const info = data.pokeBackup
    const result = info.filter(pokemon =>
      pokemon.name.indexOf(names) > -1)
    setData({
      pokemons: result
    })
  }

  if (data.loading) {
    return <Loading />
  }
  return (

    <div>
      <h1 className='text-center'>Pokedex</h1>
      <Form inline>
        <FormControl type='text' placeholder='Search' className=' mr-sm-3' onChange={handleChange} />
      </Form>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-12'>
            <CardGroup>
              {data.pokemons.map((pokemon, index) => {
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
                  evolution={data.evolution[index].chain}
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
