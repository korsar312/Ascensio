import { FC } from "react";
import Model from "View/Layouts/GameLayout/GameLayout.model";
import View from "View/Layouts/GameLayout/Layout/GameLayout_Public";
import { observer } from "mobx-react";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
