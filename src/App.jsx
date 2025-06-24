import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import UserRegistration from "./pages/UserRegistration";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
