import { useState } from "react";
import { currencyFormatter } from "../utilities/currencyFormatter";

const data = [
	{
		id: 1,
		name: "Blink Mini  Compact indoor plug-in smart security camera",
		description:
			"Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
		price: 64.99,
		image:
			"https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
		category: "Camera",
	},
	{
		id: 2,
		name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
		description:
			"It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
		price: 109.99,
		image:
			"https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
		category: "Camera",
	},
	{
		id: 3,
		name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
		description:
			"Witness millions of shades of color through powerful Dynamic Crystal technology",
		price: 497.99,
		image:
			"https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
		category: "TV",
	},
];

const Cart = () => {
	const [count, setCount] = useState(1);

	const handleDecrement = () => {
		setCount((prevCount) => prevCount - 1);
	};
	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};
	return (
		<div className="cart-section container mx-auto  py-10">
			<div className="cart-headline">
				<h2 className="section-title uppercase text-2xl font-bold text-center mb-10">
					Shopping Cart
				</h2>
			</div>
			<div className="cart-container lg:mx-8">
				<div className="product-headline grid grid-cols-5 gap-10 border-b">
					<div className="col-product col-span-2">Product</div>
					<div className="col-unit-price">Unit Price</div>
					<div className="col-counter">Quantity</div>
					<div className="col-total-price ml-auto">Total</div>
				</div>
				<div className="products flex flex-col gap-6">
					{data.map((product) => (
						<div className="product grid grid-cols-5 border-b mt-7 pb-5">
							<div className="left flex col-span-2 gap-12">
								<img
									src={product.image}
									alt={product.name}
									className="h-28 w-28 object-cover"
								/>
								<div className="details flex flex-col gap-4 items-start">
									<span>{product.name}</span>
									<button className="uppercase font-light text-base text-gray-400 hover:text-rose-500 duration-200">
										remove
									</button>
								</div>
							</div>
							<div className="unit-price">
								{currencyFormatter(product.price)}
							</div>
							<div className="counter flex">
								<button
									onClick={handleDecrement}
									className="w-10 h-10 bg-gray-100 border border-gray-300 active:bg-gray-600 active:text-gray-50">
									-
								</button>
								<span className="w-10 h-10 bg-gray-100 flex justify-center items-center border border-gray-300">
									{count}
								</span>
								<button
									onClick={handleIncrement}
									className="w-10 h-10 bg-gray-100 border border-gray-300 active:bg-gray-600 active:text-gray-50">
									+
								</button>
							</div>
							<div className="total-price ml-auto">
								{currencyFormatter(product.price)}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="cart-lower flex justify-between items-start py-9 mx-7">
				<div className="clear-btn uppercase border py-3 px-7 cursor-pointer text-lime-50 bg-indigo-500 hover:bg-rose-500 duration-300">
					Clear Cart
				</div>
				<div className="flex flex-col items-start gap-2">
					<div className="top flex justify-between w-full text-2xl font-medium">
						<span className="text-indigo-500">Subtotal</span>
						<span className="text-rose-500">{currencyFormatter(200)}</span>
					</div>
					<p className="text-gray-400">
						Taxes & shipping cost are calculated at the checkout
					</p>
					<button className="checkout bg-indigo-500 w-full py-3 uppercase font-medium text-indigo-50 tracking-widest hover:bg-indigo-600 duration-300">
						Checkout
					</button>
					<button className="continue uppercase text-indigo-500">
						← Continue Shopping
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
