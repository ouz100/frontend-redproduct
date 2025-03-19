import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Inscription from "../pages/Inscription";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HotelList from "../components/HotelList";
import MotDePasseOublie from "../pages/MotDePasseOublie";

const AppLayout = () => {
  const location = useLocation();
  
  // Vérifier l'URL actuelle pour le debug
  console.log("Page actuelle :", location.pathname);

  // Définir les pages où Navbar et Sidebar ne doivent pas apparaître
  const hiddenRoutes = ["/login", "/inscription", "/motdepasseoublie"];
  const shouldHideLayout = hiddenRoutes.includes(location.pathname.toLowerCase());

  return (
    <div>
      {!shouldHideLayout && <Navbar />}
      <div className="flex">
        {!shouldHideLayout && <Sidebar />}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/HotelList" element={<HotelList />} />
            <Route path="/motdepasseoublie" element={<MotDePasseOublie />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default AppRoutes;
