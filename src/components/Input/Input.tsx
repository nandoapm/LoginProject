import { MouseEvent, useState } from "react";
import { BoxForm, InputComponent } from "./Styles";

import Eye from "../../assets/icons/eye.svg";
import HideEye from "../../assets/icons/hide-eye.svg";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
	placeholder: string;
	currentRegister: string;
	title: string;
	icon: string;
	isPassword?: boolean;
	register: UseFormRegister<any>;
};

function Input({ placeholder, currentRegister, title, icon, isPassword = false, register }: InputProps) {
	const [isShowing, setIsShowing] = useState<boolean>(false);

	const showPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setIsShowing(!isShowing);
	};

	return (
		<InputComponent>
			<img src={icon} alt={title} />
			<BoxForm>
				<label>{title}</label>
				<input
					{...register(currentRegister)}
					placeholder={placeholder}
					type={isPassword && !isShowing ? "password" : "text"}
				/>
			</BoxForm>
			<button
				onClick={showPassword}
				style={{
					width: "30px",
					height: "30px",
					marginTop: "8px",
					backgroundColor: "transparent",
					border: "none",
					cursor: "pointer",
					outline: "none",
				}}
			>
				{isPassword && <img src={isShowing ? Eye : HideEye} alt="show-password" />}
			</button>
		</InputComponent>
	);
}

export { Input };
