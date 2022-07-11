import Navbar from "./Components/1_NavBar/Navbar";
import './App.css'
import Intro from "./Components/2_Intro/Intro";

import { ThemeContext } from './Context';
import { useContext } from 'react';

import Services from "./Components/3_Services/Services";
import Experience from "./Components/4_Experience/Experience";
/* import Works from "./Components/5_Works/Works" */
import Portfolio from "./Components/6_Portfolio/Portfolio"
import Clients from "./Components/7_Contact/Contact"
import Footer from "./Components/8_Footer/Footer"

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      {/* <Works /> */}
      <Portfolio />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
