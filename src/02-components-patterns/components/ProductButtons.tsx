import styles from "../styles/styles.module.css";

import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
export interface Props {
	className?: string;
	style?: CSSProperties;
}

export const ProductButtons = ({ style, className }: Props) => {
	const { increaseBy, counter, maxCount } = useContext(ProductContext);
	const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [
		maxCount,
		counter,
	]);

	return (
		<div
			className={`${styles.buttonsContainer} ${className}`}
			style={style}
		>
			<button
				className={styles.buttonMinus}
				onClick={increaseBy.bind(this, -1)}
			>
				-
			</button>
			<div className={styles.countLabel}> {counter}</div>
			<button
				className={`${styles.buttonAdd} ${
					isMaxReached() && styles.disabled
				}`}
				onClick={increaseBy.bind(this, 1)}
				disabled={isMaxReached()}
			>
				+
			</button>
		</div>
	);
};
