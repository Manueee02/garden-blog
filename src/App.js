import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Slideshow from './components/Slideshow';
import CardBlog from './components/CardBlog';
import Content from './components/Content';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const phoneNumber = '3314669044'; // Sostituisci con il numero di telefono desiderato
  const message = 'Ciao, avrei bisogno del tuo aiuto, vorrei avere maggiori informazioni!'; // Messaggio predefinito

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Router>
      <div className="App">
        <Logo />
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
          <i className="fab fa-whatsapp"></i>
        </button>
     
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={
            <>
              <Slideshow />
              <Content />
              <CardBlog />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
