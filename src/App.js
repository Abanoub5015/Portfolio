import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";

import { ThemeContext } from './Context';
import { useContext } from 'react';
import Services from "./Components/Services/Services";

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
