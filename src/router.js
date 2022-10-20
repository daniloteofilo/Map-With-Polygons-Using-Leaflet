import React from "react";
import { Routes, Route } from "react-router-dom";
import MapLeafLet from './components/MapLeafLet'
import Dashboard from "./pages/HomePage";
import LoginPage from './pages/LoginPage'
import RegisterPage from "./pages/RegisterPage";

function Router() {
	return (
		<Routes>
            <Route path='/' element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage/>} />
			<Route path="/mapa" element={<MapLeafLet/>} />
			<Route path="/home" element={<Dashboard/>} />
        </Routes>
	);
}
export default Router;
