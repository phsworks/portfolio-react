import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
    <>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectdetails/:id" element={<ProjectDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App
