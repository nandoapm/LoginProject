import { ChangeEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { SocialAcconts } from "../../components/SocialAccounts/SocialAcconts";

import Email from "../../assets/icons/email.svg";
import Lock from "../../assets/icons/lock.svg";
import Mobile from "../../assets/icons/mobile.svg";

import { LoginSection } from "../Login/Styles";

function CreateAccount() {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	return (
		<>
			<Header />
			<LoginSection>
				<h1>Login</h1>
				<h3>
					Enter your information below or continue <br />
					with social media account
				</h3>
				<form>
					<Input
						title="Email Address"
						placeholder="Your email address"
						icon={Email}
						onChange={handleChange}
					/>
					<Input
						title="Mobile Number"
						placeholder="Your mobile number"
						icon={Mobile}
						onChange={handleChange}
					/>
					<Input
						title="Password"
						placeholder="Enter your password"
						icon={Lock}
						isPassword={true}
						onChange={handleChange}
					/>
					<Button title="Login" />
				</form>
			</LoginSection>
			<SocialAcconts />
		</>
	);
}

export { CreateAccount };
