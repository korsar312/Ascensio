import { FC } from "react";
import Component, { IComponent as IParent } from "../../index";
import { TImageComponent } from "View/Components/0.Cores/Images";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import TColorChoice = StylesInterface.TColorChoice;

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "isFullWidth" | "type"> {
	icon: TImageComponent;
	color?: TColorChoice;
}

const Index: FC<IComponent> = (props) => {
	const { icon, color } = props;

	const propsComponent: IParent = {
		...props,
		color: false,
		icons: { LEFT: { value: [{ size: 40, img: icon, color: color ?? StylesInterface.EColor.SECOND_1 }] } },
		extStyles: { padding: 6, gap: 22, borderRadius: 8, border: "none", display: "flex", justifyContent: "center" },
	};

	return <Component {...propsComponent} />;
};

export default Index;
