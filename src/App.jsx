import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/Projects';
import DetailsPage from './pages/DetailsPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projectdetails/:id" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App
