import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
import HeaderTwo from "./HeaderTwo";
import BackToTop from "./BackToTop";

const promise = loadStripe(
    "pk_test_51JFi3eSBdHONOyZgbrMPvfqoY5YVRLVqGTjg5kCVrrwxXQLnDVhLG7x525IFjiiQETYK8ejIeBk7C5tgeU5GA5am00p9Cc09QM"
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...

        auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);

            if (authUser) {
                // the user just logged in / the user was logged in

                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <HeaderTwo />
                        <Orders />
                        <Footer />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <HeaderTwo />
                        <Checkout />
                        <Footer />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <HeaderTwo />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                        <Footer />
                    </Route>

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
