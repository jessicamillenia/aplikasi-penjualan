import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Login from "../pages/Login";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import ReportPenjualan from "../pages/ReportPenjualan";
import CheckoutPage from "../pages/CheckoutPage";

class Home extends Component {
  render() {
    return (
      <Router>
          <Fragment>
            <Routes>
              <Route path="/" exact element={<ProductList/>} />
              <Route path="/login" exact element={<Login/>} />
              <Route path="/product/:id" exact element={<ProductDetail/>} />
              <Route path="/report" exact element={<ReportPenjualan/>} />
              <Route path="/checkout" exact element={<CheckoutPage/>} />
            </Routes>
          </Fragment>
      </Router>
    );
  }
}

export default Home;