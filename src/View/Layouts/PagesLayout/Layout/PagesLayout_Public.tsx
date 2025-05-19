import { NFC } from "Logic/Libs/Util/TypesUtils";
import PagesLayoutModel from "../PagesLayout.model";
import style from "./PagesLayout_Public.styles";

const PagesLayout_Public: NFC<typeof PagesLayoutModel> = (props) => {
	const {} = props;

	return <div css={style.wrapper}></div>;
};

export default PagesLayout_Public;
