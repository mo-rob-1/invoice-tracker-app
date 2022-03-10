import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewInvoice from "./pages/NewInvoice";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-invoice" element={<PrivateRoute />}>
              <Route path="/new-invoice" element={<NewInvoice />} />
            </Route>
            <Route path="/invoices" element={<PrivateRoute />}>
              <Route path="/invoices" element={<Invoices />} />
            </Route>
            <Route path="/invoices/:invoiceId" element={<PrivateRoute />}>
              <Route path="/invoices/:invoiceId" element={<Invoice />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
