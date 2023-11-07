import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Service from "./pages/Service"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Header from "./compoments/Header/Header"
import Footer from "./compoments/Footer/Footer"

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      
      
      </BrowserRouter>
    </>
  )
}

export default App
