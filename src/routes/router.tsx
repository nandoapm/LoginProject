import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Header } from "../components/Header/Header";
import { SocialAcconts } from "../components/SocialAccounts/SocialAcconts";
import { LoginProvider } from "../context/LoginContext";

function Router() {
	return (
		<BrowserRouter>
			<LoginProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<SocialAcconts />
			</LoginProvider>
		</BrowserRouter>
	);
}

export { Router };
