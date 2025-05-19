import { IComponent } from "./index";

function SubstanceFormSchemaModel(props: IComponent) {
	const { schema, extStyle, color, buttonList, form } = props;

	const isShowFooter = Boolean(buttonList?.length);

	return { schema, extStyle, color, form, buttonList, isShowFooter };
}

export default SubstanceFormSchemaModel;
