import { FC } from "react";
import Model from "View/Components/3.Substances/SubstanceBook/SubstanceBook.model";
import View from "View/Components/3.Substances/SubstanceBook/Layout/SubstanceBook_Public";

export type IComponent = {};

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
