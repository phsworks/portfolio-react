import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projectdetails/:id"
              element={<ProjectDetailsPage />}
            />
            <Route path="/aboutme" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </I18nextProvider>
    </>
  );
}

export default App;
