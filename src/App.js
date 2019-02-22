import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import Quotes from './components/Quotes';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />      
      <br/>
      <center><hr/></center>
      <br/>
      <Leaderboard />
      <br/>
      <center><hr/></center>
      <Quotes />
      <br/>
      <Footer />
      </div>
    );
  }
}

export default App;
