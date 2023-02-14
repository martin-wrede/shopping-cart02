import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Photos from "./Photos"
import Cart from "./Cart"
import './App.css'

function App() {
  return(
    <div className="App">
    
      <Header/>
      <Routes>
        <Route path="/shopping-cart02" element={ <Photos/> } />
        <Route path="/shopping-cart02/cart" element={ <Cart/> } />
      </Routes>
    </div>
  )
}

export default App
