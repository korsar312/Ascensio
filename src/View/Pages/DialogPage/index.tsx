import { FC } from "react";
import Model from "./DialogPage.model";
import View from "./Layout/DialogPage_Public";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
