import { createContext, useContext, ReactNode, useState } from 'react';

type ServiceContext = {
	selectem: string[];
	toggle: (id: string) => void;
};

type Props = {
	children: ReactNode;
};

const intialContext: ServiceContext = {
	selectem: [],
	toggle: () => {}
};

const ServiceContext = createContext<ServiceContext>(intialContext);

export function useService() {
	return useContext(ServiceContext);
}

export function ServiceProvider({ children }: Props) {
	const [selectem, setSelectem] = useState([] as string[]);

	const toggle = (id: string) => {
		selectem.includes(id)
			? setSelectem(selectem.filter((item) => item !== id))
			: setSelectem([...selectem, id]);
	};

	const value = {
		selectem,
		toggle
	};
	return (
		<>
			<ServiceContext.Provider value={value}>
				{children}
			</ServiceContext.Provider>
		</>
	);
}
