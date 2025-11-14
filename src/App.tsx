import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Ui/Navbar.tsx"
import Home from "./Pages/Home.tsx";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
