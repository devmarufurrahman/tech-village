const Card = ({ product }) => {
	return (
		<div>
			<div className="product">
				<div className="img">
					<img src={product.image} alt={product.name} />
				</div>
				<span className="category-tag">{product.category}</span>
				<h3 className="title">{product.name}</h3>
				<p className="details">{product.description}</p>
				<div>
					<span className="price">{product.price}</span>
					<button>Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
