import { StyledButton } from "./Styles";

type ButtonProps = {
	title: string;
	type: "submit" | "button" | "reset";
};

function Button({ title, type }: ButtonProps) {
	return <StyledButton type={type}>{title}</StyledButton>;
}

export { Button };
