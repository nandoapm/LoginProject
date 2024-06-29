import { HeaderWrapper, ImageWrapper, ResponsiveImage } from "./Styles";

import background from "../../assets/icons/background.png";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();

	return (
		<HeaderWrapper>
			<ImageWrapper>
				{location.pathname === "/login" ? (
					<Link to="/create-account">
						<img src={arrowLeft} width={32} alt="back-page" />
					</Link>
				) : (
					<Link to="/login">
						<img src={arrowLeft} width={32} alt="back-page" />
					</Link>
				)}
			</ImageWrapper>
			<ResponsiveImage src={background} alt="background-header" />
		</HeaderWrapper>
	);
}

export { Header };
