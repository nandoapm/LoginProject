import styled from "styled-components";

const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 25rem; /* 400px → 25rem (400 / 16 = 25)*/
	box-sizing: border-box;
	margin: 0 auto;
`;

const ImageWrapper = styled.div`
	display: flex;
	padding-left: 1rem; /* 16px */
	align-items: center;
`;

const ResponsiveImage = styled.img`
	max-width: 100%;
	height: auto;

	@media (max-width: 25rem) {
		/* 400px */
		max-width: 80%;
	}
`;

export { HeaderWrapper, ImageWrapper, ResponsiveImage };
