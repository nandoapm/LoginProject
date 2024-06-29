import { ToastContainer } from "react-toastify";
import { Container } from "./components/Container/Container";
import { Router } from "./routes/router";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Container>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<Router />
		</Container>
	);
}

export default App;
