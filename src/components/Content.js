import React,{useState,useEffect} from 'react';
import CardsPokemon from './CardsPokemon';

const Content = () => {

    let [pokemons,setPokemons]= useState([

    ])

    useEffect(()=>{
      let array = []
      const fetchData= async()=>{
        for (let i = 1; i < 26; i++) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            let data = await response.json()
            array.push(data)
        }

        setPokemons(array)
      }
      fetchData()  
    },[])

    
    return (
        <div>
            <h1>Pokedex</h1>
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