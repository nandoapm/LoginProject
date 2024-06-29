import { HeaderWrapper, ImageWrapper, ResponsiveImage } from "./Styles";

import background from "../../assets/icons/background.png";
import arrowLeft from "../../assets/icons/arrow-left.svg";

function Header() {
	return (
		<HeaderWrapper>
			<ImageWrapper>
				<img src={arrowLeft} width={32} alt="back-page" />
			</ImageWrapper>
			<ResponsiveImage src={background} alt="background-header" />
		</HeaderWrapper>
	);
}

export { Header };
