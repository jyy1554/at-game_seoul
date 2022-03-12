import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './Footer/Footer';
import Game from './Game/Game';
import Header from './Header/Header';
import Result from './Result/Result';
import Welcome from './Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;