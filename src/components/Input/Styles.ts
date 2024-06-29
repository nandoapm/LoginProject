import styled from "styled-components";

const InputComponent = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.25rem 0; /* 4px 0 */
	padding: 0.5rem; /* 8px */
	border-radius: 0.25rem; /* 4px */
	border: 0.0625rem solid #e9ecef; /* 1px → 0.0625rem (1 / 16 = 0.0625) */
	font-size: 0.8125rem; /* 13px → 0.8125rem (13 / 16 = 0.8125)*/
	color: #20130b;
	width: 100%;
	box-sizing: border-box;
`;

const BoxForm = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0.75rem; /* 12px 0 */
	width: 100%;

	label {
		font-weight: 500;
	}

	input {
		padding: 0.25rem 0; /* 4px 0 */
		width: 100%;
		border: none;
		outline: none;
		color: #20130b;

		&::placeholder {
			color: #a0a0a0;
		}
	}
`;

export { InputComponent, BoxForm };
