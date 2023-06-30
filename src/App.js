import logo from './logo.svg';
import './App.css';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';

function App() {

  return (
    
    <div className="App">
      <Nav />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />

       </div>
       /*{ <header className="App-header">{ }
   //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> }*/
    
  );
}

export default App;
