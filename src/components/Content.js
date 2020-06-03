import React,{useState,useEffect} from 'react';
import CardsPokemon from './CardsPokemon';
import {Form, Button, FormControl} from 'react-bootstrap'

const Content = () => {

    let [pokemons,setPokemons]= useState([])
    let [pokeBackup,setPokeBackup] = useState([])

    useEffect(()=>{
      let array = []
      const fetchData= async()=>{
        for (let i = 1; i < 26; i++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            let data = await response.json()
            array.push(data)
        }
        setPokemons(array)
        setPokeBackup(array)
      }
      fetchData()  
    },[])

    const handleChange=(e)=>{
        let names = e.target.value
        const data = pokeBackup
        const result =data.filter(pokemon=>
        pokemon.name.indexOf(names)>-1) 
        setPokemons(result)
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={handleChange} />
                <Button type="submit">Submit</Button>
            </Form>
            {pokemons.map((pokemon, index)=>{
              return  <CardsPokemon 
                key = {index}
                name = {pokemon.name}
                picture = {pokemon.sprites.front_default}
                number = {pokemon.id}
                types = {pokemon.types}
                />
            })}
           
        </div>
      );
}
 
export default Content;