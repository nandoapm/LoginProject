import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import Email from "../../assets/icons/email.svg";
import Lock from "../../assets/icons/lock.svg";
import Mobile from "../../assets/icons/mobile.svg";

import { SectionWrapper } from "./Styles";

function Login() {
	const { isCreateAccount, currentUser, handleSubmit, handleChange } = useContext(LoginContext);

	return (
		<SectionWrapper>
			{isCreateAccount ? (
				<>
					<h1>Create Account</h1>
					<h3>
						Enter your information below or continue <br />
						with social media account
					</h3>
				</>
			) : (
				<>
					<h1>Login</h1>
					<h3>
						Welcome back! <br />
						Please login to continue
					</h3>
				</>
			)}

			<form onSubmit={handleSubmit}>
				<Input
					name="emailAddress"
					value={currentUser.emailAddress}
					title="Email Address"
					placeholder="Your email address"
					icon={Email}
					onChange={handleChange}
				/>
				{isCreateAccount && (
					<Input
						name="phoneNumber"
						title="Mobile Number"
						placeholder="Your mobile number"
						icon={Mobile}
						value={currentUser.phoneNumber!}
						onChange={handleChange}
					/>
				)}

				<Input
					name="password"
					value={currentUser.password}
					title="Password"
					placeholder="Enter your password"
					icon={Lock}
					isPassword={true}
					onChange={handleChange}
				/>
				<Button title="Login" type="submit" />
			</form>
			{!isCreateAccount && <a href="#">Forgot Password</a>}
		</SectionWrapper>
	);
}

export { Login };
