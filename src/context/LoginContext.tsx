import {
	ChangeEvent,
	createContext,
	FormEvent,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type LoginContextProps = {
	isCreateAccount: boolean;
	currentUser: UserProps;
	changeCreateAccount: () => void;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

type UserProps = {
	phoneNumber?: string;
	password: string;
	emailAddress: string;
};

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

const LoginProvider = ({ children }: { children: ReactNode }) => {
	const [isCreateAccount, setIsCreateAccount] = useState<boolean>(false);
	const [users, setUsers] = useState<UserProps[]>([]);
	const [currentUser, setCurrentUser] = useState<UserProps>({
		phoneNumber: "",
		password: "",
		emailAddress: "",
	});

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

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setCurrentUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}, []);

	const handleSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			if (!currentUser.emailAddress || !currentUser.password) {
				toast.error("Por favor, preencha todos os campos obrigatórios.");

				return;
			}

			const emailAlreadyExists = users.some((user) => user.emailAddress === currentUser.emailAddress);

			if (emailAlreadyExists) {
				const correctPassword = users.some((user) => user.password === currentUser.password);

				if (correctPassword) {
					toast.success("Informações confirmadas");
					setCurrentUser({ emailAddress: "", phoneNumber: "", password: "" });
				} else {
					toast.error("Informações inválidas");
				}
			} else {
				if (isCreateAccount && currentUser.phoneNumber) {
					users.push(currentUser);

					localStorage.setItem("users", JSON.stringify(users));

					setIsCreateAccount(false);

					toast.success("Usuário cadastrado com sucesso!");

					setCurrentUser({ emailAddress: "", phoneNumber: "", password: "" });
					return;
				}
				toast.error("Email não cadastro. Por favor criar uma conta");
			}
		},
		[isCreateAccount, currentUser, users]
	);

	const contextValue = useMemo(
		() => ({
			isCreateAccount,
			currentUser,
			changeCreateAccount,
			handleChange,
			handleSubmit,
		}),
		[isCreateAccount, currentUser, changeCreateAccount, handleChange, handleSubmit]
	);

	return <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>;
};

export { LoginProvider, LoginContext };
