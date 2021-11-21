import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

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
						<Route path="/product/:id" render={props => <ProductScreen match={props.match} />} />
						<Route path="/cart/:id?" render={props => <CartScreen match={props.match} />} />
					</Container>
				</main>
				<Footer />
			</Router>
		</>
	);
};

export default App;
