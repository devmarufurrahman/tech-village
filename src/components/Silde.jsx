import { Link } from "react-router-dom";

const Silde = ({ image }) => {
	return (
		<div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
			<div className="slide-text container mx-auto flex flex-col  items-start justify-center h-full pl-40 gap-5">
				<h1 className="text-6xl  uppercase font-semibold">
					Capture the Perfect Shot with Our DSLR Camera Collection.
				</h1>
				<p className="text-xl w-3/5">
					Discover the power of professional photography with our
					high-performance DSLR cameras. Whether you are a passionate hobbyist
					or a seasoned photographer, our range of DSLR cameras delivers
					exceptional image quality, precise controls, and versatility. From
					stunning landscapes to captivating portraits, our cameras are equipped
					with advanced features and interchangeable lenses, allowing you to
					unleash your creativity and capture every detail with stunning
					clarity.
				</p>
				<Link className="text-lg uppercase border-2 border-green-600 text-gray-300 py-3 px-8 mt-5 hover:bg-green-600 hover:text-green-50 rounded-lg duration-300">
					Shop now and capture brilliance!
				</Link>
			</div>
		</div>
	);
};

export default Silde;
