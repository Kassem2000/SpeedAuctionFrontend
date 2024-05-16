import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CreateAuctionPage from "./pages/CreateAuctionPage";
import ProfilePage from "./pages/ProfilePage";
import BidPage from "./pages/BidPage";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { AuctionProvider } from "./context/AuctionContext";

function App() {
  return (
    <AuthProvider>
      <AuctionProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bid/:id" element={<BidPage />} />
            <Route path="/createAuction" element={<CreateAuctionPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </AuctionProvider>
    </AuthProvider>
  );
}

export default App;