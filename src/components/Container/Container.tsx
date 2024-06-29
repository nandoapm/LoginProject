import { ReactNode } from "react";
import { AppContainer, ContentWrapper } from "./Styles";

type ChildrenProps = {
	children: ReactNode;
};

function Container({ children }: ChildrenProps) {
	return (
		<AppContainer>
			<ContentWrapper>{children}</ContentWrapper>
		</AppContainer>
	);
}

export { Container };
