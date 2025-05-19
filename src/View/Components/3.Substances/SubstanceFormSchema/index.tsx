import { FC } from "react";
import Model from "./SubstanceFormSchema.model";
import View from "./Layout/SubstanceFormSchema_Public";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { TDeepCSSObject } from "View/ViewUtils";
import { IComponent as IButtonIcon } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import { IComponent as IDropdown } from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import { IComponent as IButton } from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";
import { IComponent as IInput } from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import { IComponent as IQR } from "View/Components/1.Atoms/AtomQR/";
import { IComponent as IText } from "View/Components/0.Cores/Text";
import { IComponent as IForm } from "View/Components/0.Cores/Form";

export interface IComponent {
	form: Pick<IForm, "onSubmit" | "onChange">;
	schema: TSubstanceFormSchemaRow;
	buttonList?: IButton[];
	extStyle?: TDeepCSSObject;
	color?: StylesInterface.TColorChoice;
}

export type TSubstanceFormSchemaRow = {
	value: TSubstanceFormSchemaValue;
	extStyle?: TDeepCSSObject;
};

export type TSubstanceFormSchemaValue = TSubstanceFormSchemaField | TSubstanceFormSchemaRow[];

export type TSubstanceFormSchemaField = {
	label?: string;
	required?: boolean;
} & (TInputField | TSelectField | TTextField | TSelectQR | TSelectButton);

export enum ESubstanceFormSchemaField {
	TEXT = "TEXT",
	INPUT = "INPUT",
	SELECT = "SELECT",
	BUTTON_ICON = "BUTTON_ICON",
	QR = "QR",
}

type TTextField = {
	type: ESubstanceFormSchemaField.TEXT;
	options: IText;
};

type TInputField = {
	type: ESubstanceFormSchemaField.INPUT;
	options: IInput;
};

type TSelectField = {
	type: ESubstanceFormSchemaField.SELECT;
	options: IDropdown;
};

type TSelectButton = {
	type: ESubstanceFormSchemaField.BUTTON_ICON;
	options: IButtonIcon;
};

type TSelectQR = {
	type: ESubstanceFormSchemaField.QR;
	options: IQR;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
