import styled from "styled-components";

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 0.75rem; /* 12px */
	box-sizing: border-box;
	background-color: #d3d3d3;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 0.25rem; /* 4px */
	box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1); /* 0 0 12px */
	min-width: 18.75rem; /* 300px  (300 / 16 = 18.75)*/
	max-width: 25rem; /* 400px (400 / 16 = 25) */
	width: 100%;
	background-color: #ffffff;
`;

export { AppContainer, ContentWrapper };
