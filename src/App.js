import React from 'react'
import { Routes, Route, BrowserRouter,} from "react-router-dom";
import { Box } from '@mui/system';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m="auto">
        <BrowserRouter>
        <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/exercise/:id" element={<ExerciseDetails/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </Box>
  )
}

export default App
