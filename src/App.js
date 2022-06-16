import Navbar from "./Components/1_NavBar/Navbar";
import './App.css'
import Intro from "./Components/2_Intro/Intro";

import { ThemeContext } from './Context';
import { useContext } from 'react';
import Services from "./Components/3_Services/Services";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
