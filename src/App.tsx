import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Shared/Navbar.tsx"
import Footer from "./Components/Shared/Footer.tsx"
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import Blog from "./Pages/Blog.tsx";
import Shop from "./Pages/Shop.tsx";
import Product from "./Pages/Product.tsx";
import Cart from "./Pages/Cart.tsx";
import Checkout from "./Pages/CheckOut.tsx";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
