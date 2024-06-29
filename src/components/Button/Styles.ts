import styled from "styled-components";

const StyledButton = styled.button`
	margin: 1rem 0; /* 16px 0*/
	padding: 1rem 0; /* 16px 0*/
	border-radius: 0.25rem; /* 4px */
	border: none;
	display: flex;
	justify-content: center;
	color: #ffffff;
	width: 100%;
	background-color: #bc8363;
	cursor: pointer;
	box-sizing: border-box;

	&:hover {
		background-color: #d49d82;
	}
`;

export { StyledButton };
