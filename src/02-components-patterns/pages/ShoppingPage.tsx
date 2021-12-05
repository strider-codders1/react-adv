import { ProductCard } from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCard
				key={product.id}
				product={product}
				className="bg-dark text-white"
				initialValues={{
					count: 4,
					maxCount: 10,
				}}
			>
				{({ reset, increaseBy, isMaxCountReached, count }) => (
					<>
						<ProductCard.Image className="custom-image" />
						<ProductCard.Title
							title="Product 1"
							className="text-white"
						/>
						<ProductCard.Buttons className="custom-buttons" />
						<button onClick={reset}>Reset</button>
						<button onClick={increaseBy.bind(this, -2)}>-2</button>
						{!isMaxCountReached && (
							<button onClick={increaseBy.bind(this, 2)}>
								+2
							</button>
						)}
						<span>{count}</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};
