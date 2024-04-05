import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp.jsx'
import { store } from './store/Store.js'
import { TodoApp } from './TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <TodoApp/>
    </Provider>
    
  </React.StrictMode>,
)
