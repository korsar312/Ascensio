import { FC, RefObject } from "react";
import Component, { ESubstanceFormSchemaField, IComponent as IParent, TSubstanceFormSchemaRow } from "../../index";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import { CSSObject } from "@emotion/react/dist/emotion-react.cjs";
import { TImageComponent } from "View/Components/0.Cores/Images";
import { TAtomQRAction } from "View/Components/1.Atoms/AtomQR";

export interface IComponent {
	title: LanguageInterface.EWord;
	fieldTop: TSubstanceFormSchemaField;
	fieldMid: TSubstanceFormSchemaField;
	fieldBot: TSubstanceFormSchemaField;
	buttonTop: TSubstanceFormSchemaBtn;
	QRCode: TSubstanceFormSchemaQR;
	onChange: (val: TSubstanceFormSchemaChange) => void;
}

export type TSubstanceFormSchemaQR = {
	code: string;
	ref?: RefObject<TAtomQRAction | null>;
};

export type TSubstanceFormSchemaField = {
	title: LanguageInterface.EWord;
	input: string;
};

export type TSubstanceFormSchemaBtn = {
	image: TImageComponent;
	click: () => void;
	isDisable?: boolean;
};

export type TSubstanceFormSchemaChange = {
	topText: string;
	midText: string;
	botText: string;
};

const { EFont, EColor } = StylesInterface;

const Index: FC<IComponent> = (props) => {
	const { title, fieldTop, fieldMid, fieldBot, buttonTop, QRCode, onChange } = props;

	const titleContent: TSubstanceFormSchemaRow = {
		extStyle: [{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }],
		value: [
			{
				value: {
					type: ESubstanceFormSchemaField.TEXT,
					options: { text: title, color: EColor.SECOND_1, font: EFont.Mont_B_22, pos: "left" },
				},
			},
			{
				value: {
					type: ESubstanceFormSchemaField.BUTTON_ICON,
					options: { icon: buttonTop.image, isDisable: buttonTop.isDisable, click: buttonTop.click },
				},
			},
		],
	};

	const fieldContent: TSubstanceFormSchemaRow = {
		extStyle: createStyleFlex(12),
		value: [fieldRow(fieldTop, "topText", true), fieldRow(fieldMid, "midText", true), fieldRow(fieldBot, "botText")],
	};

	const QRContent: TSubstanceFormSchemaRow = {
		extStyle: [createStyleFlex(), { alignItems: "center" }],
		value: {
			type: ESubstanceFormSchemaField.QR,
			options: { code: QRCode.code, referral: QRCode.ref },
		},
	};

	function fieldRow(field: TSubstanceFormSchemaField, name: string, isNumber?: boolean): TSubstanceFormSchemaRow {
		return {
			extStyle: createStyleFlex(8),
			value: [
				{
					value: {
						type: ESubstanceFormSchemaField.TEXT,
						options: { text: field.title, color: StylesInterface.EColor.SECOND_2, font: StylesInterface.EFont.Mont_S_18 },
					},
				},
				{
					value: {
						type: ESubstanceFormSchemaField.INPUT,
						options: { initText: { text: field.input }, name, type: isNumber ? "number" : undefined },
					},
				},
			],
		};
	}

	const propsComponent: IParent = {
		...props,
		schema: { extStyle: createStyleFlex(22), value: [titleContent, fieldContent, QRContent] },
		form: { onChange: onChange },
	};

	function createStyleFlex(gap: number = 0): CSSObject {
		return { display: "flex", flexDirection: "column", gap };
	}

	return <Component {...propsComponent} />;
};

export default Index;
