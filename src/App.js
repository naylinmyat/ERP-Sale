import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Quotes from "./pages/Quotes";
import SalesOrders from "./pages/SalesOrders";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import CustomerAdd from "./pages/CustomerAdd";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerEdit from "./pages/CustomerEdit";
import ProductAdd from "./pages/ProductAdd";
import ProductDetails from "./pages/ProductDetails";
import ProductEdit from "./pages/ProductEdit";
import QuoteDetails from "./pages/QuoteDetails";
import QuoteAdd from "./pages/QuoteAdd";
import QuoteEdit from "./pages/QuoteEdit";
import SalesOrderDetails from "./pages/SalesOrderDetails";
import SalesOrderAdd from "./pages/SalesOrderAdd";
import SalesOrderEdit from "./pages/SalesOrderEdit";
import InvoiceDetails from "./pages/InvoiceDetails";
import InvoiceEdit from "./pages/InvoiceEdit";
import InvoiceAdd from "./pages/InvoiceAdd";
import PaymentDetails from "./pages/PaymentDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<CustomerAdd />} />
          <Route path="/customers/details" element={<CustomerDetails />} />
          <Route path="/customers/edit" element={<CustomerEdit />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/details" element={<ProductDetails />} />
          <Route path="/products/edit" element={<ProductEdit />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/add" element={<QuoteAdd />} />
          <Route path="/quotes/details" element={<QuoteDetails />} />
          <Route path="/quotes/edit" element={<QuoteEdit />} />
          <Route path="/sales-orders" element={<SalesOrders />} />
          <Route path="/sales-orders/add" element={<SalesOrderAdd />} />
          <Route path="/sales-orders/details" element={<SalesOrderDetails />} />
          <Route path="/sales-orders/edit" element={<SalesOrderEdit />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoices/add" element={<InvoiceAdd />} />
          <Route path="/invoices/details" element={<InvoiceDetails />} />
          <Route path="/invoices/edit" element={<InvoiceEdit />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/details" element={<PaymentDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
