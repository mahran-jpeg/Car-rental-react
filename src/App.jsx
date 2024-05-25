
import Nav from "./components/Nav"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Home from "./pages/Home"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Models from "./pages/Models"
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/models" element={<Models />}/>
      
      </Routes>
  
  <Footer/>
    </Router>
  
    </>
  )
}

export default App
