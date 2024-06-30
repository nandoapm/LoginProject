import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Header } from "../components/Header/Header";
import { SocialAcconts } from "../components/SocialAccounts/SocialAcconts";
import { LoginProvider } from "../context/LoginContext";
import NotFound from "../pages/404NotFound/NotFound";

function Router() {
	return (
		<BrowserRouter>
			<LoginProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<SocialAcconts />
			</LoginProvider>
		</BrowserRouter>
	);
}

export { Router };
