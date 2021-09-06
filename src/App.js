import React, {Component} from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <Portfolio></Portfolio>
          <About></About>
          <Contact></Contact>
          <Footer></Footer>
        </main>
      </div>
    );
  }
  
}

export default App;
