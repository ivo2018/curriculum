import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import PortfolioDivider from './Components/PortfolioDivider';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<PortfolioDivider />} />
    </Routes>
  </BrowserRouter>
    
  
  );
}

export default App;
