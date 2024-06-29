import { ButtonSocialAccount, GroupButton, SocialAccountSection } from "./Styles";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook.svg";
import apple from "../../assets/icons/apple.svg";
import twitter from "../../assets/icons/twitter.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

function SocialAcconts() {
	const { isCreateAccount, changeCreateAccount } = useContext(LoginContext);

	const icons = [
		{
			icon: google,
			alt: "Google",
		},
		{
			icon: facebook,
			alt: "Facebook",
		},
		{
			icon: apple,
			alt: "Apple",
		},
		{
			icon: twitter,
			alt: "Twitter",
		},
	];

	return (
		<SocialAccountSection>
			<h5>Or Continue with Social Accounts</h5>

			<GroupButton>
				{icons.map((item, index) => (
					<ButtonSocialAccount key={index}>
						<img src={item.icon} width={25} alt={item.alt} />
					</ButtonSocialAccount>
				))}
			</GroupButton>

			<h5>
				{isCreateAccount ? "Already have an account?" : "Don’t have an account?"}
				&nbsp;
				<Link to="#" onClick={changeCreateAccount}>
					{isCreateAccount ? "Login Now" : "Create Now"}
				</Link>
			</h5>
		</SocialAccountSection>
	);
}

export { SocialAcconts };
