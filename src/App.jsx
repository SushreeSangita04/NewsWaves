import { useState } from "react"
import Navbar from "./Components/Navbar"
import Newsboard from "./Components/Newsboard"
import NewsItem from "./Components/NewsItem"

const App = () => {
  const[category,setCategory]=useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
