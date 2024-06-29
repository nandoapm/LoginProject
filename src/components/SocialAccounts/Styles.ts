import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-0.25rem); } /* 4px */
  50% { transform: translateX(0.25rem); } /* 4px */
  75% { transform: translateX(-0.25rem); } /* 4px */
  100% { transform: translateX(0); }
`;

const SocialAccountSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	margin: 5rem 0 1.75rem 0; /* 80px 0 20px 0 */
`;

const GroupButton = styled.div`
	display: flex;
	justify-content: center;
	margin: 0.25rem 0 1.75rem 0; /* 4px 0 20px 0 */
	gap: 0.75rem; /* 12px */
`;

const ButtonSocialAccount = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 4rem; /* 64px */
	height: 4rem; /* 64px */
	border-radius: 0.25rem; /* 4px */
	border: none;
	outline: none;
	background-color: transparent;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); /* 0px 4px 8px */

	cursor: pointer;

	&:hover {
		box-shadow: 0 0.5rem 0.75rem rgba(0, 0, 0, 0.2); /* 0px 8px 12px */
		animation: ${shake} 0.5s;
	}
`;

export { ButtonSocialAccount, GroupButton, SocialAccountSection };
