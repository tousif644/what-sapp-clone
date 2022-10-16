import React, {useState} from "react"
import Login from "./Components/Login"
import "./App.css"
import LocalStorage from "./Hooks/LocalStorage";

function App() {
  const [id, setId] = LocalStorage('id')
  return (
    <div className="App bg-dark text-white">
      {id}
      <Login onIdSubmit={setId}></Login>
    </div>
  )
}

export default App
