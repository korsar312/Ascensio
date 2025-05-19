import { FC } from "react";
import Substance, { IComponent as ISubstances } from "View/Components/3.Substances/SubstanceFormSchema/Variables/SubstanceFormSchemaChange";
import { observer } from "mobx-react";
import { LanguageInterface } from "Logic/Core/Modules/Language/Language.interface";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: ISubstances = {
		title: LanguageInterface.EWord.QR_GENERATOR,
		fieldTop: { input: "", title: LanguageInterface.EWord.SHOP_NUMBER },
		fieldMid: { input: "", title: LanguageInterface.EWord.CASS_NUMBER },
		fieldBot: { input: "", title: LanguageInterface.EWord.TEXT_FOR_CRYPT },
		buttonTop: { image: "IconSave", click: () => "" },
		onChange: () => "",
		QRCode: { code: "QRCode" },
	};

	return <Substance {...propsComponent} />;
};

export default observer(Index);
