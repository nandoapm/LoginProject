import { ButtonSocialAccount, GroupButton, SocialAccountSection } from "./Styles";
import google from "../../assets/icons/google.svg";
import facebook from "../../assets/icons/facebook.svg";
import apple from "../../assets/icons/apple.svg";
import twitter from "../../assets/icons/twitter.svg";

function SocialAcconts() {
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
				{icons.map((item) => (
					<ButtonSocialAccount>
						<img src={item.icon} width={25} alt={item.alt} />
					</ButtonSocialAccount>
				))}
			</GroupButton>

			<h5>
				Don’t have an account? <a href="">Create Now</a>
			</h5>
		</SocialAccountSection>
	);
}

export { SocialAcconts };
