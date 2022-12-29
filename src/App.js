import React from 'react';
import './App.css';

import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={ 45 } hair={"Black"} button={"Jane Doe"}></PersonCard>
      <PersonCard firstName={"Smith"} lastName={"John"} age={ 88 } hair={"Brown"} button={"John Smith"}></PersonCard>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={ 50 } hair={"Brown"} button={"Millard Fillmore"}></PersonCard>
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={ 62 } hair={"Brown"} button={"Maria Smith"}></PersonCard>
    </div>
  );
}

export default App;