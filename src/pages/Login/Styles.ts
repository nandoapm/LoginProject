import styled from "styled-components";

const SectionWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 1.25rem; /* 0 20px */
	box-sizing: border-box;

	h3 {
		padding: 1.25rem 0; /* 20px 0*/
	}

	form {
		width: 100%;
		max-width: 25rem; /* 400px */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Error = styled.span`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	color: red;
	font-size: 0.75rem; /* 12px */
`;

export { SectionWrapper, Error };
