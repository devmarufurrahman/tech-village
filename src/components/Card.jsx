import { currencyFormatter } from "../utilities/currencyFormatter";

currencyFormatter;

const Card = ({ product }) => {
	return (
		<div>
			<div className="product flex flex-col gap-3 px-2 shadow-lg rounded-md overflow-hidden hover:shadow-2xl duration-300">
				<div className="img">
					<img src={product.image} alt={product.name} />
				</div>
				<div className="texts flex flex-col gap-3 py-5 px-3">
					<span className="category-tag uppercase text-xs font-semibold tracking-widest text-lime-500">
						{product.category}
					</span>
					<h3 className="title text-xl h-[5.25rem]">{product.name}</h3>
					<p className="details text-gray-500 h-[6rem]">
						{product.description}
					</p>
					<div className="flex justify-between items-center">
						<span className="price text-xl font-medium text-violet-500">
							{currencyFormatter(product.price)}
						</span>
						<button className="uppercase bg-lime-600 text-lime-50 font-medium py-3 px-5 rounded-md hover:bg-violet-500 duration-300">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
