import { createContext, useContext, ReactNode, useState } from 'react';

type NavContext = {
	mobnav: boolean;
	toggle: () => void;
};

type Props = {
	children: ReactNode;
};

const intialContext: NavContext = {
	mobnav: false,
	toggle: () => {}
};

const NavContext = createContext<NavContext>(intialContext);

export function useNav() {
	return useContext(NavContext);
}

export function NavProvider({ children }: Props) {
	const [mobnav, setMobnav] = useState<boolean>(false);

	const toggle = () => {
		setMobnav(!mobnav);
	};

	const value = {
		mobnav,
		toggle
	};
	return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
