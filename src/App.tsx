import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Shared/Navbar.tsx"
import Footer from "./Components/Shared/Footer.tsx"
import Home from "./Pages/Home.tsx";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
