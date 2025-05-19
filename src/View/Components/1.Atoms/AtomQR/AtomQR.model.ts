import { IComponent, TAtomQRAction } from "./index";
import QRCodeStyling from "qr-code-styling";
import { ForwardedRef, useEffect, useImperativeHandle, useRef } from "react";
import { StylesInterface } from "Logic/Core/Modules/Styles/Styles.interface";
import UseCases from "Logic/Core/UseCases/UseCases";

function AtomQRModel(props: IComponent, ref: ForwardedRef<TAtomQRAction>) {
	const { code } = props;

	const qrRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		qrRef.current && qrCode.append(qrRef.current);
		qrRef.current && qrCode.update({ data: code });
	}, [code]);

	useImperativeHandle(ref, () => ({
		download: () => qrCode.download(),
	}));

	const qrCode = new QRCodeStyling({
		width: 290,
		backgroundOptions: { color: getColor(StylesInterface.EColor.PRIME_3) },
		dotsOptions: { color: getColor(StylesInterface.EColor.SECOND_1), type: "rounded" },
		cornersSquareOptions: { color: getColor(StylesInterface.EColor.RED_2), type: "rounded" },
	});

	function getColor(color: StylesInterface.EColor) {
		return UseCases.system.style.getColor(color);
	}

	return { qrRef };
}

export default AtomQRModel;
