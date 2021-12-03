import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <main className="py-3">
                    <Container>
                        <Route path="/" exact>
                            <HomeScreen />
                        </Route>
                        <Route path="/product/:id" render={props => <ProductScreen match={props.match} history={props.history} />} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/profile" component={ProfileScreen} />
                        <Route path="/shipping" component={ShippingScreen} />
                        <Route path="/payment" component={PaymentScreen} />
                        <Route path="/placeorder" component={PlaceOrderScreen} />
                    </Container>
                </main>
                <Footer />
            </Router>
        </>
    );
};

export default App;
