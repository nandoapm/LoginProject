import { ChangeEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { SocialAcconts } from "../../components/SocialAccounts/SocialAcconts";

import email from "../../assets/icons/email.svg";
import lock from "../../assets/icons/lock.svg";

import { LoginSection } from "./Styles";

function Login() {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	return (
		<>
			<Header />
			<LoginSection>
				<h1>Login</h1>
				<h3>
					Welcome back! <br />
					Please login to continue
				</h3>
				<form>
					<Input
						title="Email Address"
						placeholder="Your email address"
						icon={email}
						onChange={handleChange}
					/>
					<Input
						title="Password"
						placeholder="Enter your password"
						icon={lock}
						isPassword={true}
						onChange={handleChange}
					/>
					<Button title="Login" />
				</form>
				<a href="#">Forgot Password</a>
			</LoginSection>
			<SocialAcconts />
		</>
	);
}

export { Login };
