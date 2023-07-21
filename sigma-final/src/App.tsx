
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import BasketPage from "./pages/BasketPage";
import OrderSucsess from "./pages/OrderSucsess";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";
import OrderInner from "./pages/OrderInner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/orderDone" element={<OrderSucsess />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/order/:id" element={<OrderInner />} />
      </Routes>
      <Footer />
    </div>
  );
}
 
export default App;
