import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.scss'
import axios from 'axios'
import * as actions from '../actions'

const App = () => {
  const status = useSelector((state) => state.status)

  const dispatch = useDispatch()

  const getStatus = () => {
    axios
      .get('/api')
      .then((res) => {
        const { status } = res.data
        console.log(status)
        dispatch(actions.updateStatus(status))
      })
      .catch((err) => {
        dispatch(actions.updateStatus('Offline'))
      })
  }

  return (
    <div className="App">
      <p>Current status: {status}</p>
      <button onClick={getStatus}>Update</button>
    </div>
  )
}

export default App
