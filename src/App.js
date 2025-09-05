import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
