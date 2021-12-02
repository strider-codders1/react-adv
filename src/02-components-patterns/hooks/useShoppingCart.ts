import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({
		count,
		product,
	}: {
		count: number;
		product: Product;
	}) => {
		setShoppingCart((oldShoppingCart) => {
			const productInCart: ProductInCart = oldShoppingCart[
				product.id
			] || { ...product, count: 0 };

			if (Math.max(productInCart.count + count, 0)) {
				productInCart.count += count;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}

			const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			return { ...rest };

			// Esto era cuando el count era controlador con el useCounter y ese me devolvía el valor del count, con la implementación que se muestra en el codigo anterior el setShoppingCart es el que se encarga de mantener el estado de cuántos productos hay en el carrito, ya que el count solo devuelve 1 y -1.
			// if (count === 0) {
			// 	// const prevShoppingCart = { ...oldShoppingCart };
			// 	// delete prevShoppingCart[product.id];
			// 	// return prevShoppingCart;
			// 	const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			// 	return rest;
			// }

			// return {
			// 	...oldShoppingCart,
			// 	[product.id]: { ...product, count },
			// };
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
