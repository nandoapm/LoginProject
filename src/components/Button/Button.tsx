import { MouseEvent } from "react";
import { StyledButton } from "./Styles";

type ButtonProps = {
	title: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>, title: string) => void;
};

function Button({ title, onClick }: ButtonProps) {
	return <StyledButton onClick={(event) => onClick?.(event, title)}>{title}</StyledButton>;
}

export { Button };
