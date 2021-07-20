import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Orders from "./Orders";
import Login from "./Login";
import Payment from "./Payment";
import Elements from "./Elements";
import Checkout from "./Checkout";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        {/* <Elements stripe={promise}> */}
                        <Elements>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
