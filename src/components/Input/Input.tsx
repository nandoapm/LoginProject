import { ChangeEvent } from "react";
import { BoxForm, InputComponent } from "./Styles";

import eye from "../../assets/icons/eye.svg";

type InputProps = {
	placeholder: string;
	title: string;
	icon: string;
	isPassword?: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, title, icon, isPassword = false, onChange }: InputProps) {
	return (
		<InputComponent>
			<img src={icon} alt={title} />
			<BoxForm>
				<label>{title}</label>
				<input placeholder={placeholder} onChange={onChange} />
			</BoxForm>
			<button
				style={{
					width: "30px",
					height: "30px",
					marginTop: "8px",
					backgroundColor: "transparent",
					border: "none",
					cursor: "pointer",
				}}
			>
				{isPassword && <img src={eye} alt="show-password" />}
			</button>
		</InputComponent>
	);
}

export { Input };
