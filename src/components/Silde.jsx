import { Link } from "react-router-dom";

const Silde = ({ image }) => {
	return (
		<div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
			<div className="slide-text container mx-auto flex flex-col  items-start justify-center h-full pl-40 gap-5">
				<h1 className="text-6xl uppercase font-semibold">{image.headline}</h1>
				<p className="text-xl w-3/5">{image.body}</p>
				<Link
					to={`/products/${image.category}`}
					className="text-lg uppercase border-2 border-green-600 text-gray-300 py-3 px-8 mt-5 hover:bg-green-600 hover:text-green-50 rounded-lg duration-300">
					{image.cta}
				</Link>
			</div>
		</div>
	);
};

export default Silde;
