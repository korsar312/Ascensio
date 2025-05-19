import { FC } from "react";
import Model from "./SubstanceModal.model";
import View from "./Layout/SubstanceModal_Public";
import { IComponent as IFormChange } from "View/Components/3.Substances/SubstanceFormSchema/Variables/SubstanceFormSchemaChange";
import { IComponent as IFormAdd } from "View/Components/3.Substances/SubstanceFormSchema/Variables/SubstanceFormSchemaChange";

export type IComponent = {
	isShow: boolean;
} & TConcat;

type TConcat = TCreate | TAdd;

export enum ESubstanceModalType {
	CHANGE = "CHANGE",
	CREATE = "CREATE",
}

type TCreate = TForm<ESubstanceModalType.CREATE, IFormChange>;
type TAdd = TForm<ESubstanceModalType.CHANGE, IFormAdd>;

type TForm<T extends ESubstanceModalType, F> = {
	type: T;
	form: F;
};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
