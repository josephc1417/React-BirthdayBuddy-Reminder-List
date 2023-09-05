import { useState } from "react"
import data from "./data"
import { List } from "./components/list"


export const App = () => {
  const [people, setPeople]= useState(data)
  const handleClick =() => {
    setPeople([])
  }
  
  
  return(
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>
        <List people={people}/>
        <button type="button" className="btn btn-block" onClick={handleClick}>Clear All</button>
      </section>
    </main>
      
   
  )
}

export default App
