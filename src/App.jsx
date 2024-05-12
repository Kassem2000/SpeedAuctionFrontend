import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CreateAuctionPage from "./pages/CreateAuctionPage";
import ProfilePage from "./pages/ProfilePage";
import BidPage from "./pages/BidPage";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import{AuthProvider} from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <HeroImage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bid" element={<BidPage />} />
          <Route path="/createAuction" element={<CreateAuctionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
