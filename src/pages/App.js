import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Content from '../components/Content'
import DetailsPokemon from '../components/DetailsPokemon'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/Pokedex' component={Content} />
          <Route exact path='/details' component={DetailsPokemon} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
