
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Skills from './Components/Skills';

import  ContactUs  from './Components/ContactUs';
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
      <Route path="/contactus" element={<ContactUs />} />      
    </Routes>
  </BrowserRouter>
    
  
  );
}

export default App;
