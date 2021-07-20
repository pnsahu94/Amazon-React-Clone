import React, { useEffect } from "react";
import "./App.css";
import Header from ".//Header";
import HeaderTwo from "./HeaderTwo";
import Home from "./Home";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from ".//Login";
import Footer from "./Footer";
// import CreateAccount from "./CreateAccount";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider.js";
import BackToTop from "./BackToTop";
import Payment from "./Payment";
import Orders from "./Orders";

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app" id="app">
                <Switch>
                    {/* login route */}
                    <Route path="/login">
                        <Login />
                    </Route>

                    {/* createAccount route
                    <Route path="/createAccount">
                        <CreateAccount />
                    </Route> */}

                    {/* checkout route */}
                    <Route path="/checkout">
                        <Header />
                        <HeaderTwo />
                        <Checkout />
                        <Footer />
                    </Route>

                    {/* payment route */}
                    <Route path="/payment">
                        <Header />
                        <HeaderTwo />
                        {/* <Elements stripe={promise}> */}
                        <Payment />
                        {/* </Elements> */}
                        <Footer />
                    </Route>

                    {/* orders route */}
                    <Route path="/orders">
                        <Header />
                        <HeaderTwo />
                        <Orders />
                        <Footer />
                    </Route>

                    {/* home route/ Default route */}
                    <Route path="/">
                        <Header />
                        <HeaderTwo />
                        <Home />
                        <BackToTop />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
