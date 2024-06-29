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

export { SectionWrapper };
