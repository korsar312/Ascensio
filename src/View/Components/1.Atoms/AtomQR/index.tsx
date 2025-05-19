import { forwardRef, RefObject } from "react";
import Model from "./AtomQR.model";
import View from "./Layout/AtomQR_Public";

export interface IComponent {
	code: string;
	referral?: RefObject<TAtomQRAction | null>;
}

export type TAtomQRAction = {
	download?: () => void;
};

const Index = forwardRef<TAtomQRAction, IComponent>((props, ref) => {
	const model = Model(props, ref);
	return <View {...model} />;
});

export default Index;
