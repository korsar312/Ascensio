import { FC } from "react";
import Model from "./AtomInput.model";
import View from "./Layout/AtomInput_Public";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject, TTagPartialInput } from "View/ViewUtils";

export interface IComponent extends TTagPartialInput<HTMLInputElement, "name" | "onClick" | "type"> {
	initText: TAtomInputText;
	onChange?: (val: string) => void;
	extStyle?: TDeepCSSObject;
}

export type TAtomInputText = {
	text: LanguageInterface.TAllWord;
	font?: StylesInterface.EFont;
	color?: StylesInterface.TColorChoice;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
