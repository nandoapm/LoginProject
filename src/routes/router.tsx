import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { CreateAccount } from "../pages/CreateAccount/CreateAccount";
import { Header } from "../components/Header/Header";
import { SocialAcconts } from "../components/SocialAccounts/SocialAcconts";

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/create-account" element={<CreateAccount />} />
			</Routes>
			<SocialAcconts />
		</BrowserRouter>
	);
}

export { Router };
