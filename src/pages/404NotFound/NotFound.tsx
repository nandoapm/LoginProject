import { AnimatedText, Container, HomeLink, Message } from "./Styles";

function NotFound() {
	return (
		<Container>
			<AnimatedText>404</AnimatedText>
			<Message>Página não encontrada</Message>
			<HomeLink to="/">Login</HomeLink>
		</Container>
	);
}

export default NotFound;
