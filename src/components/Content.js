import React,{useState,useEffect} from 'react';
import CardsPokemon from './CardsPokemon';
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css';



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
          <div className="container-fluid">
           <CardGroup>
            <div className="row ">
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
           </CardGroup>
           </div>
        </div>
        

      );
}
 
export default Content;