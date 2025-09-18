import React from 'react';
import Hero from './components/Hero/Hero';
import ProductInfo from './components/ProductInfo/ProductInfo';
import DiamondHistory from './components/DiamondHistory/DiamondHistory';
import WhyDiamondPrime from './components/WhyDiamondPrime/WhyDiamondPrime';
import GoldenBrasilHistory from './components/GoldenBrasilHistory/GoldenBrasilHistory';
import SocialProof from './components/SocialProof/SocialProof';
// Lembre-se que Testimonials foi incorporado em SocialProof, então não precisa dele aqui
import FinalCTA from './components/FinalCTA/FinalCTA'; // <-- Importe aqui
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Hero />
      <ProductInfo />
      <DiamondHistory />
      <WhyDiamondPrime />
      <GoldenBrasilHistory />
      <SocialProof />
      <FinalCTA /> {/* <-- Adicione aqui */}
    </div>
  );
}

export default App;