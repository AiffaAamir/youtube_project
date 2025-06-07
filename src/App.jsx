import { useState } from 'react'
import './App.css'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from './firebase'

const db = getDatabase(app)

function App() {
  const [count, setCount] = useState(0)

  const putData = () => {
    set(ref(db, "users/aiffa"), {
      id: 1,
      name: "aiffa",
      age: 21,
    })
  }

  return (
    <>
      <h1>Firebase Project</h1>
      <button onClick={putData}>Send Data</button>
    </>
  )
}

export default App
