import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InverseColors from './components/InverseColors/InverseColors';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  const [colorExterno, setColorExterno] = useState('');
  return (
    <>
      <Header/>
      <InverseColors />
      <Footer />
    </>
  );
}

export default App;
