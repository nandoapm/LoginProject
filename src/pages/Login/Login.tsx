import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Button } from "../../components/Button/Button";
import { Error, SectionWrapper } from "./Styles";
import { Input } from "../../components/Input/Input";

import Email from "../../assets/icons/email.svg";
import Lock from "../../assets/icons/lock.svg";
import Mobile from "../../assets/icons/mobile.svg";

function Login() {
	const { isCreateAccount, submitForm, register, handleSubmit, errors } = useContext(LoginContext);

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

			<form onSubmit={handleSubmit(submitForm)}>
				<Input
					title="Email Address"
					placeholder="Your email address"
					icon={Email}
					currentRegister="emailAddress"
					register={register}
				/>
				{errors && <Error>{errors.emailAddress?.message}</Error>}

				{isCreateAccount && (
					<>
						<Input
							title="Mobile Number"
							placeholder="Your mobile number"
							icon={Mobile}
							currentRegister="phoneNumber"
							register={register}
						/>
						{errors && <Error>{errors.phoneNumber?.message}</Error>}
					</>
				)}

				<Input
					title="Password"
					placeholder="Enter your password"
					icon={Lock}
					isPassword={true}
					currentRegister="password"
					register={register}
				/>
				{errors && <Error>{errors.password?.message}</Error>}

				<Button title="Login" type="submit" />
			</form>
			{!isCreateAccount && <a href="#">Forgot Password</a>}
		</SectionWrapper>
	);
}

export { Login };
