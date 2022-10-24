import React from "react";
import { Routes, Route } from "react-router-dom";
import MapLeafLet from './components/MapLeafLet'
import HomePage from "./pages/HomePage";
// import LoginPage from './pages/LoginPage'
import RegisterPage from "./pages/RegisterPage";

function Router() {
	return (
		<Routes>
            <Route path='/' element={<HomePage />} />
			<Route path="/register" element={<RegisterPage/>} />
			<Route path="/mapa" element={<MapLeafLet/>} />
			<Route path="/home" element={<HomePage/>} />
        </Routes>
	);
}
export default Router;
