const Cart = () => {
	return (
		<div className="cart-section container mx-auto py-10">
			<div className="cart-headline">
				<h2 className="section-title uppercase text-2xl font-bold text-center mb-10">
					Shopping Cart
				</h2>
			</div>
			<div className="cart-container text-center grid grid-cols-4">
				<div className="col-product">Product</div>
				<div className="col-unit-price">Unit Price</div>
				<div className="col-counter">Quantity</div>
				<div className="col-total-price">Total</div>
			</div>
			<div className="cart-lower"></div>
		</div>
	);
};

export default Cart;
