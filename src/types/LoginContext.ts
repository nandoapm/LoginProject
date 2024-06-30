import { FieldErrors, UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
import { UserProps } from "./User";

export type LoginContextProps = {
	isCreateAccount: boolean;
	changeCreateAccount: () => void;
	submitForm: (data: UserProps) => void;
	register: UseFormRegister<any>;
	handleSubmit: UseFormHandleSubmit<any>;
	errors: FieldErrors<UserProps>;
};
