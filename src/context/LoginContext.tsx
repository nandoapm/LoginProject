import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { LoginContextProps } from "../types/LoginContext";
import { UserProps } from "../types/User";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

import "react-toastify/dist/ReactToastify.css";

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

const schema = object({
	emailAddress: string().required("Campo obrigatório").email("Email inválido").max(25),
	phoneNumber: number().positive(),
	password: string()
		.required("Campo obrigatório")
		.min(3, "A senha precisa ter no mínimo 6 caracteres")
		.max(10, "A senha precisa ter no máximo 10 caracteres"),
});

const LoginProvider = ({ children }: { children: ReactNode }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const [isCreateAccount, setIsCreateAccount] = useState<boolean>(false);
	const [users, setUsers] = useState<UserProps[]>([]);

	useEffect(() => {
		setIsCreateAccount(false);

		const localStorageUsers = localStorage.getItem("users");

		if (localStorageUsers) {
			setUsers(JSON.parse(localStorageUsers));
		}
	}, []);

	const changeCreateAccount = useCallback(() => {
		setIsCreateAccount(!isCreateAccount);
	}, [isCreateAccount]);

	const submitForm = useCallback(
		(data: UserProps) => {
			if (!data.emailAddress || !data.password) {
				toast.error("Por favor, preencha todos os campos obrigatórios.");

				return;
			}

			const emailAlreadyExists = users.some((user) => user.emailAddress === data.emailAddress);

			if (emailAlreadyExists) {
				const correctPassword = users.some((user) => user.password === data.password);

				if (correctPassword) {
					toast.success("Informações confirmadas");
				} else {
					toast.error("Informações inválidas");
				}
			} else {
				if (isCreateAccount && data.phoneNumber) {
					users.push(data);

					localStorage.setItem("users", JSON.stringify(users));

					setIsCreateAccount(false);

					toast.success("Usuário cadastrado com sucesso!");

					return;
				}
				toast.error("Email não cadastro. Por favor criar uma conta");
			}
		},
		[isCreateAccount, users]
	);

	const contextValue = useMemo(
		() => ({
			isCreateAccount,
			changeCreateAccount,
			submitForm,
			//Hook Forms
			register,
			handleSubmit,
			errors,
		}),
		[isCreateAccount, changeCreateAccount, submitForm, register, handleSubmit, errors]
	);

	return <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>;
};

export { LoginProvider, LoginContext };
