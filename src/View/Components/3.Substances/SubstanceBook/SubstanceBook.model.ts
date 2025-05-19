import { IComponent } from "./index";
import { useEffect, useRef } from "react";

function SubstanceBookModel(props: IComponent) {
	const {} = props;

	const bookRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		if (!bookRef.current) return;
	}, []);

	return { bookRef };
}

export default SubstanceBookModel;
