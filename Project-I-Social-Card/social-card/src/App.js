import React from 'react';
import './App.css';

//Header Components
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";

//Card components
import CardContainer from "./components/CardComponents/CardContainer";

//Footer Components

const App = () => {
  return (
    <div>
      <HeaderContainer />

      <CardContainer />
    </div>

  );
};

export default App;
