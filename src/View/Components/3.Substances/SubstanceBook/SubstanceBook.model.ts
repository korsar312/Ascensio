import { IComponent } from "./index";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";

type HTMLFlipBookProps = React.ComponentProps<typeof HTMLFlipBook>;

function SubstanceBookModel(props: IComponent) {
	const {} = props;

	const ref = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState([0, 0]);

	useEffect(() => {
		if (!ref.current) return;
		setSize([ref.current.offsetWidth, ref.current.offsetHeight]);
	}, []);

	const bookProps = {
		width: size[0] / 2 - (size[0] / 100) * 5,
		height: size[1] - (size[1] / 100) * 6,
		useMouseEvents: !false,
	} as HTMLFlipBookProps;

	return { bookProps, ref, size };
}

export default SubstanceBookModel;
