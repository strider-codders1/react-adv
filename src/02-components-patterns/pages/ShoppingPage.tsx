import { ProductCard } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className="bg-dark text-white"
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductCard.Image className="custom-image" />
						<ProductCard.Title
							title="Product 1"
							className="text-white"
						/>
						<ProductCard.Buttons className="custom-buttons" />
					</ProductCard>
				))}
			</div>
			<div className="shopping-cart">
				{Object.entries(shoppingCart).length > 0
					? Object.entries(shoppingCart).map(([key, product]) => (
							<ProductCard
								key={key}
								product={product}
								className="bg-dark text-white"
								style={{ width: "100px" }}
								value={product.count}
								onChange={onProductCountChange}
							>
								<ProductCard.Image className="custom-image" />
								<ProductCard.Buttons
									className="custom-buttons"
									style={{
										display: "flex",
										justifyContent: "center",
									}}
								/>
							</ProductCard>
					  ))
					: null}
			</div>
		</div>
	);
};
