import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductInfo from './components/ProductInfo/ProductInfo';
import DiamondHistory from './components/DiamondHistory/DiamondHistory';
import WhyDiamondPrime from './components/WhyDiamondPrime/WhyDiamondPrime';
import GoldenBrasilHistory from './components/GoldenBrasilHistory/GoldenBrasilHistory';
import SocialProof from './components/SocialProof/SocialProof';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div id="hero"><Hero /></div>
      <div id="product-info"><ProductInfo /></div>
      <div id="diamond-history"><DiamondHistory /></div>
      <div id="why-prime"><WhyDiamondPrime /></div>
      <div id="golden-history"><GoldenBrasilHistory /></div>
      {/* --- GARANTA QUE ESTE ID ESTEJA AQUI --- */}
      <div id="social-proof"><SocialProof /></div>
      <div id="final-cta"><FinalCTA /></div>
      
      <Footer />
    </div>
  );
}

export default App;