import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import UseCases from "Logic/Core/UseCases/UseCases";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";
import { typesUtils } from "Logic/Libs/Util/TypesUtils";

export interface IComponent extends typesUtils.MakeOptional<IParent, "color"> {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const color = UseCases.system.style.getColor(StylesInterface.EColor.SECOND_4);
	const style: CSSObject = { border: `solid 1px ${color}` };

	const propsComponent: IParent = {
		...props,
		extStyle: [style, props.extStyle],
		color: StylesInterface.EColor.PRIME_3,
	};

	return <Component {...propsComponent} />;
};

export default Index;
