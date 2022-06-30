import React from 'react'
import Home from './pages/Home'
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route  path='/cart' exact element={<Cart />} />
          <Route exact path ='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App