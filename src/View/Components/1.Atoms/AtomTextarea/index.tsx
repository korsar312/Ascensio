import { FC } from "react";
import Model from "./AtomTextarea.model";
import View from "./Layout/AtomTextarea_Public";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject, TTagPartialBtn } from "View/ViewUtils";

export interface IComponent extends TTagPartialBtn<HTMLTextAreaElement, "name" | "onClick"> {
	initText: TAtomInputText;
	onChange?: (val: string) => void;
	extStyle?: TDeepCSSObject;
	maxHeight?: number;
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
