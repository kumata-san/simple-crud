import React, { Component } from 'react'
import AddForm from './AddForm'
import CharacterList from './CharacterList'

class App extends Component {
  render(){
      return (
        <div>
          <AppForm />
          <CharacterList />
        </div>
      )
    }
  }

export default App