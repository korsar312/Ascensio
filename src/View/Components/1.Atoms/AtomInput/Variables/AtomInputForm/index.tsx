import { FC } from "react";
import Component, { IComponent as IParent, TAtomInputText } from "../../index";
import UseCases from "Logic/Core/UseCases/UseCases";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";

export interface IComponent extends IParent {}

const Index: FC<IComponent> = (props) => {
	const { extStyle } = props;

	const textPropExtract = textProp(props.initText);
	const heightText = textPropExtract.font ? (UseCases.system.style.getSizeFont(textPropExtract.font) * 4) / 10 : 0;
	const color = UseCases.system.style.getColor(StylesInterface.EColor.SECOND_4);

	const style: CSSObject = {
		outline: `2px solid ${color}`,
		padding: `${heightText}px ${heightText * 1.5}px`,
		borderRadius: 6,
		boxSizing: "border-box",
	};

	const propsComponent: IParent = {
		...props,
		initText: textProp(props.initText),
		extStyle: [extStyle, style],
	};

	function textProp(el: TAtomInputText): TAtomInputText {
		return el && { ...el, font: el.font || StylesInterface.EFont.Mont_M_22 };
	}

	return <Component {...propsComponent} />;
};

export default Index;
