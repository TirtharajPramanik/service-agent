import { createContext, useContext, ReactNode, useState } from 'react';

interface PersonalInfo {
	name: string;
	number: string;
	state: string;
	pin: string;
	city: string;
	ward: string;
	ans: string;
}
interface PaymentInfo {
	bank: string;
	account: string;
}
interface SigninInfo {
	number: string;
}

type AgentContext = {
	agentInfo: PersonalInfo;
	paymentInfo: PaymentInfo;
	signinInfo: SigninInfo;
	setAgentInfo: (info: PersonalInfo) => void;
	setPaymentInfo: (info: PaymentInfo) => void;
	setSigninInfo: (info: SigninInfo) => void;
};

type Props = {
	children: ReactNode;
};
const agentInfo = {
	name: '',
	number: '',
	state: '',
	pin: '',
	city: '',
	ward: '',
	ans: ''
};

const paymentInfo = {
	bank: '',
	account: ''
};

const signinInfo = {
	number: ''
};

const intialContext: AgentContext = {
	agentInfo,
	paymentInfo,
	signinInfo,
	setAgentInfo: (info: PersonalInfo) => {},
	setPaymentInfo: (info: PaymentInfo) => {},
	setSigninInfo: (info: SigninInfo) => {}
};

const AgentContext = createContext<AgentContext>(intialContext);

export function useAgent() {
	return useContext(AgentContext);
}

export function AgentProvider({ children }: Props) {
	const [agent, setAgent] = useState<PersonalInfo>(agentInfo);
	const [payment, setPayment] = useState<PaymentInfo>(paymentInfo);
	const [signin, setSignin] = useState<SigninInfo>(signinInfo);

	const setAgentInfo = (info: PersonalInfo) => {
		setAgent(info);
	};
	const setPaymentInfo = (info: PaymentInfo) => {
		setPayment(info);
	};
	const setSigninInfo = (info: SigninInfo) => {
		setSignin(info);
	};

	const value = {
		agentInfo: agent,
		paymentInfo: payment,
		signinInfo: signin,
		setAgentInfo,
		setPaymentInfo,
		setSigninInfo
	};
	return (
		<AgentContext.Provider value={value}>{children}</AgentContext.Provider>
	);
}
