import './App.css';
import Home from './components/Home';
import About from './components/About';
// import Intro2 from './components/Intro2';
// import Intro3 from './components/Intro3';
// import Footer from './components/Footer';
// import Nav from './components/Nav';
// import Btn from './components/Btn';
// import Promo from './components/Promo';
// import Intro1 from './components/Intro1';
import React from './React.png';


// function Logo(props){
//   const image = <img src={React} />;
//   return image;
// }

// const data = {
//   heading : "Parent-child data flow",
//   component : "I will build more data flow"
// }

function App() {

  return (
    
    <div className="App">
      <nav className="Nav">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About</a>
      </nav>
      <Home/>
      <About />

      {/* <Logo /> */}
      {/* <Nav />
      <Btn />
      <Promo heading = {data.heading} component = {data.component}/>
      <Intro1 react="React developer!"/>
      <Intro2 />
      <Intro3 />
      <Footer /> */}

    </div>    
  );
}

export default App;
