import React from 'react';
import Hero from './components/Hero';
import CoreFeatures from './components/CoreFeatures';
import PreDepartureChecklist from './components/PreDepartureChecklist';
import FleetScale from './components/FleetScale';
import SecurityPeace from './components/SecurityPeace';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <CoreFeatures />
      <PreDepartureChecklist />
      <FleetScale />
      <SecurityPeace />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
