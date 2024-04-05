
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,incrementBy } from './store/counter/counterSlice'

function App() {
  
  const { counter  } = useSelector ( state => state.counter )
  const dispatch = useDispatch()
  return (
    <>
      <h1>Count is { counter } </h1>
      <div className="card">
        <button onClick={ () => dispatch(increment())}>
          Increment
        </button>
        <button onClick={ () => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={ () => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
        
      </div>
    </>
  )
}

export default App
