import { ChangeEvent } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import Email from "../../assets/icons/email.svg";
import Lock from "../../assets/icons/lock.svg";
import Mobile from "../../assets/icons/mobile.svg";

import { SectionWrapper } from "../Login/Styles";

function CreateAccount() {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	return (
		<SectionWrapper>
			<h1>Create Account</h1>
			<h3>
				Enter your information below or continue <br />
				with social media account
			</h3>
			<form>
				<Input title="Email Address" placeholder="Your email address" icon={Email} onChange={handleChange} />
				<Input title="Mobile Number" placeholder="Your mobile number" icon={Mobile} onChange={handleChange} />
				<Input
					title="Password"
					placeholder="Enter your password"
					icon={Lock}
					isPassword={true}
					onChange={handleChange}
				/>
				<Button title="Login" />
			</form>
		</SectionWrapper>
	);
}

export { CreateAccount };
