import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import { ProductContextProps, Product } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	children?: ReactElement | ReactElement[];
	className?: string;
	product: Product;
	style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
	const { counter, increaseBy } = useProduct();
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
