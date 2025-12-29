
import Ajouter from './Ajouter'
import './App.css'
import Header from './Header'
import Liste from './Liste'
import Logine from './Logine'
import Modifier from './Modifier'
import Details from './Details'

import { Route, Routes } from 'react-router-dom'

// l'importation pour applicker le button :  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Logine />} />
        <Route path='/header' element={<Header />} />
        <Route path='/list' element={<Liste />} />
        <Route path='/add' element={<Ajouter />} />
        <Route path='/modifier/:num' element={<Modifier />} />
        <Route path='/details/:num' element={<Details />} /> 
      </Routes> 
    </>
  )
}

export default App
