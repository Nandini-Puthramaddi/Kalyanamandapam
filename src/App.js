import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Payment from './Pages/Payment';
import Book from "./Pages/Book";
import Form from "./Pages/Form";
import BookRoom from "./Pages/BookRoom";
import NavBar from './Pages/NavBar';


function App() {
  return (
    <Router>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
          <Route path="/form" element={<Form />} />
          <Route path="/bookroom" element={<BookRoom />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        
      
      
    </Router>
  );
}

export default App;
