import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #fefefe;
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
`;

const AnimatedText = styled.h1`
	font-size: 10rem;
	color: #ff6b6b;
	animation: ${bounce} 2s infinite;
`;

const Message = styled.p`
	font-size: 2rem;
	color: #333;
	margin-bottom: 20px;
`;

const HomeLink = styled(Link)`
	font-size: 1.5rem;
	color: #bc8363;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export { Container, AnimatedText, Message, HomeLink };
