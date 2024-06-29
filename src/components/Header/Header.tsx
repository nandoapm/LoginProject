import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import { HeaderWrapper, ImageWrapper, ResponsiveImage } from "./Styles";

import background from "../../assets/icons/background.png";
import arrowLeft from "../../assets/icons/arrow-left.svg";

function Header() {
	const { changeCreateAccount } = useContext(LoginContext);

	return (
		<HeaderWrapper>
			<ImageWrapper>
				<Link to="#" onClick={changeCreateAccount}>
					<img src={arrowLeft} width={32} alt="back-page" />
				</Link>
			</ImageWrapper>
			<ResponsiveImage src={background} alt="background-header" />
		</HeaderWrapper>
	);
}

export { Header };
