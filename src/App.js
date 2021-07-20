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
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

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
