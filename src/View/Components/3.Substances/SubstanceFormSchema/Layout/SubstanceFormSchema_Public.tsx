import { NFC } from "Logic/Libs/Util/TypesUtils";
import { ESubstanceFormSchemaField, TSubstanceFormSchemaField, TSubstanceFormSchemaRow } from "../index";
import { TDeepCSSObject } from "View/ViewUtils";
import { ReactElement } from "react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import styles from "./SubstanceFormSchema_Public.styles";
import SubstanceFormSchemaModel from "View/Components/3.Substances/SubstanceFormSchema/SubstanceFormSchema.model";
import AtomPaper from "View/Components/1.Atoms/AtomPaper";
import AtomDropdownForm from "View/Components/1.Atoms/AtomDropdown/Variables/AtomDropdownForm";
import AtomInputForm from "View/Components/1.Atoms/AtomInput/Variables/AtomInputForm";
import AtomButtonIcon from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonIcon";
import AtomButtonForm from "View/Components/1.Atoms/AtomButton/Variables/AtomButtonForm";
import Text from "View/Components/0.Cores/Text";
import Form from "../../../0.Cores/Form";
import AtomPaperWindow from "View/Components/1.Atoms/AtomPaper/Variables/AtomPaperWindow";
import AtomQR from "View/Components/1.Atoms/AtomQR";

const SubstanceFormSchema_Public: NFC<typeof SubstanceFormSchemaModel> = (props) => {
	const { schema, extStyle, color, form, buttonList, isShowFooter } = props;

	const content = (
		<AtomPaperWindow extStyle={[styles.form, extStyle]} color={color}>
			{typeChoice(schema, 1)}
		</AtomPaperWindow>
	);

	const footer = (
		<AtomPaper extStyle={styles.bottom} color={StylesInterface.EColor.SECOND_4}>
			{buttonList?.map((el) => <AtomButtonForm key={el.text} {...el} />)}
		</AtomPaper>
	);

	function typeChoice(field: TSubstanceFormSchemaRow, id: number): ReactElement {
		const { value: element, extStyle } = field;
		const value = Array.isArray(element) ? element.map((el, i) => typeChoice(el, i)) : fieldChoice(element);

		return elementWrapper(value, id, extStyle);
	}

	function fieldChoice(field: TSubstanceFormSchemaField) {
		switch (field.type) {
			case ESubstanceFormSchemaField.TEXT:
				return <Text {...field.options} />;
			case ESubstanceFormSchemaField.INPUT:
				return <AtomInputForm {...field.options} />;
			case ESubstanceFormSchemaField.SELECT:
				return <AtomDropdownForm {...field.options} />;
			case ESubstanceFormSchemaField.BUTTON_ICON:
				return <AtomButtonIcon {...field.options} />;
			case ESubstanceFormSchemaField.QR:
				return <AtomQR {...field.options} ref={field.options.referral} />;
		}
	}

	function elementWrapper(fields: ReactElement | ReactElement[], id: number, extStyle?: TDeepCSSObject) {
		return (
			<div key={id} css={extStyle}>
				{fields}
			</div>
		);
	}

	return (
		<Form {...form}>
			{content}
			{isShowFooter && footer}
		</Form>
	);
};

export default SubstanceFormSchema_Public;
