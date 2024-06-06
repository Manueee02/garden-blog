import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Slideshow from './components/Slideshow';
import Content from './components/Content';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <Header />
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={
            <>
              <Slideshow />
              <Content />
              <ContactForm />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
