import { ButtonSocialAccount, GroupButton, SocialAccountSection } from "./Styles";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook.svg";
import apple from "../../assets/icons/apple.svg";
import twitter from "../../assets/icons/twitter.svg";
import { Link, useLocation } from "react-router-dom";

function SocialAcconts() {
	const location = useLocation();

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
				{location.pathname === "/login" ? (
					<>
						`Don’t have an account?`<Link to="/create-account">Create Now</Link>
					</>
				) : (
					<>
						Already have an account? <Link to="/login">Login Now</Link>
					</>
				)}
			</h5>
		</SocialAccountSection>
	);
}

export { SocialAcconts };
