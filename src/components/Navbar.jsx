import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<div className="nav-bg bg-green-700 text-green-50 h-20 flex justify-center">
			<div className="navbar container mx-auto flex items-center justify-between px-2">
				<div className="left text-2xl font-semibold">
					<span>
						Tech<span className="text-lime-500">VillaGe</span>
					</span>
				</div>
				<div className="right flex items-center gap-4 pr-4">
					<Link to="/" className="nav-link hover:text-lime-300 duration-300">
						Home
					</Link>
					<Link
						to="/products"
						className="nav-link hover:text-lime-300 duration-300">
						Products
					</Link>
					<Link to="/cart">
						<span className="cart-icon relative hover:text-lime-300 duration-300">
							<BsCart3 />
							<span className="cart-counter absolute -top-4 -right-4 bg-lime-600 h-5 w-5 rounded-full flex items-center justify-center text-xs font-medium">
								{cartItems.length}
							</span>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
