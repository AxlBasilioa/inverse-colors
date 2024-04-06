import React from 'react';
import './App.css';
import InverseColors from './components/InverseColors/InverseColors';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header/>
      <InverseColors />
      <Footer />
    </>
  );
}

export default App;
