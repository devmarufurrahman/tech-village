const Checkout = () => {
	const url = "https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg";
	return (
		<div>
			<div className="checkout w-80 bg-gray-200 h-96 mx-auto text-center p-8 mt-20">
				<img src={url} alt="" />
				<h2 className="text-lg font-bold">Bkash: 01757474700</h2>
				<p>Please call this number and confirm your order</p>
			</div>
		</div>
	);
};

export default Checkout;
