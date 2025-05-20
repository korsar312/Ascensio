import { NFC } from "Logic/Libs/Util/TypesUtils";
import SubstanceBookModel from "../SubstanceBook.model";
import HTMLFlipBook from "react-pageflip";
import React from "react";
import "./SubstanceBook_Public.styles.scss";
import styles from "./SubstanceBook_Public.styles";
import Images from "View/Components/0.Cores/Images";
import Book from "Assets/Image/Image-book.png";

const SubstanceBook_Public: NFC<typeof SubstanceBookModel> = (props) => {
	const { bookProps, ref, size } = props;

	return (
		<div ref={ref} css={styles.wrapper}>
			<Images extStyle={styles.book} img={Book} />
			<HTMLFlipBook {...bookProps}>
				<div css={{ background: "red" }} className="page ">
					Page 1
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 2
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 3
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 4
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 6
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 1
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 2
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 3
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 4
				</div>
				<div css={{ background: "red" }} className="page ">
					Page 6
				</div>
			</HTMLFlipBook>
		</div>
	);
};

export default SubstanceBook_Public;

const PageCover = () => {
	return (
		<div className="page page-cover" data-density="hard">
			<div className="page-content">
				<h2>{435678434567}</h2>
			</div>
		</div>
	);
};

const Page = () => {
	return (
		<div className="page">
			<div className="page-content">
				<h2 className="page-header">Page header</h2>
				<div className="page-image">dfgdf</div>
				<div className="page-text">dge54</div>
				<div className="page-footer">523w4</div>
			</div>
		</div>
	);
};
