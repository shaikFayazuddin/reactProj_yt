import { useState } from "react"
import Gamepage from "./components/Gamepage"
import Homepage from "./components/Homepage"

function App() {

  const [isGameStarted, setIsGameStarted] = useState(true)

  const toggleGamePlay=()=>{
    setIsGameStarted(prev=>!prev)
  }
  return (
      <div>
        {isGameStarted ? <Gamepage/> : <Homepage toggle={toggleGamePlay}/>}
      </div>

  )
}

export default App
