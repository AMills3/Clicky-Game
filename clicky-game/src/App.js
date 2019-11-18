import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import cardsContainer from "./components/cardsContainer";

class App extends Component {
  state = {
    cardsSelected: [],
    score: 0,
    highScore: 0,
    message: "Begin game."
  };

//Clicking on an image
  clickImage = event => {
  let imageId = event.target.id;

//Players loses if they click on an image twice
  if(this.state.cardSelected.includes(imageId)) {
  this.setState({
    score: 0, 
    cardSelected: [],
    message: "This card was already chosen.",
  });

  } else {
    this.state.cardSelected.push(imageId);

//Updating the score
if(this.state.highScore <= this.state.score) {
  this.setState({
    highScore: this.state.score + 1,
    message: "Card never chosen.",
    score: this.state.score + 1
  })
  } else {
  this.setState({
    message: "Card never chosen.",
    score: this.state.score + 1
      })
    }
  }
}

render() {
  return (
    <div>
      <Navbar message={this.state.message} score={this.state.score} highScore={this.state.highScore}/>
      <Header />

      (Need to define cardsContainer as a function later)
      <cardsContainer clickImage={this.clickImage}/>
      <Footer />
    </div>
  );
}

}

export default App;
