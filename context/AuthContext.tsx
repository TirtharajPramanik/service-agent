import { createContext, useContext, ReactNode, useState } from 'react';

type AuthContext = {
	logedin: boolean;
	login: () => void;
	logout: () => void;
};

type Props = {
	children: ReactNode;
};

const intialContext: AuthContext = {
	logedin: false,
	login: () => {},
	logout: () => {}
};

const AuthContext = createContext<AuthContext>(intialContext);

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
	const [logedin, setLogedin] = useState<boolean>(false);

	const login = () => {
		setLogedin(true);
	};
	const logout = () => {
		setLogedin(false);
	};

	const value = {
		logedin,
		login,
		logout
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
