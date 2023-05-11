import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Silde from "./Silde";

const data = [
	{
		id: 1,
		src: "https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		headline: "Dslr Camera Canon",
		body: "Discover the power of professional photography with our high-performance DSLR cameras. Whether you are a passionate hobbyist or a seasoned photographer, our range of DSLR cameras delivers exceptional image quality, precise controls, and versatility. From stunning landscapes to captivating portraits, our cameras are equipped with advanced features and interchangeable lenses, allowing you to unleash your creativity and capture every detail with stunning clarity.",
		cta: "Shop now and capture brilliance!",
		category: "camera",
	},
	{
		id: 2,
		src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		headline: "Smart Television LED",
		body: "Revolutionize your viewing experience with our LED Smart Televisions. Shop now for stunning visuals and endless entertainment. Upgrade your entertainment with our LED Smart Televisions. Immerse yourself in stunning visuals and enjoy endless streaming options. Shop now for the ultimate viewing experience.",
		cta: "Experience brilliance. Shop now",
		category: "television",
	},
	{
		id: 3,
		src: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		headline: "Stylish Headphone",
		body: "Elevate your audio experience with our collection of stylish headphones. These sleek and trendy headphones combine exceptional sound quality with a fashionable design, ensuring you look and feel your best while enjoying your favorite tunes.Immerse yourself in rich, immersive sound with crystal-clear highs and deep, powerful bass. Whether you're a music lover, a podcast enthusiast, or a gamer, our stylish headphones deliver an immersive audio experience that will transport you to another world.",
		cta: "Immerse in sound, rock your style. Shop now.",
		category: "headphone",
	},
	{
		id: 4,
		src: "https://images.pexels.com/photos/1666759/pexels-photo-1666759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		headline: "Gaming console ps4",
		body: "Experience gaming like never before with our state-of-the-art gaming consoles. Immerse yourself in stunning graphics, lightning-fast performance, and a vast library of games. Take your gaming to the next level and conquer new worlds. Shop now and unleash your gaming potential.",
		cta: "Elevate your gaming. Shop now.",
		category: "console",
	},
	{
		id: 5,
		src: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		headline: "QUARTZ Watch",
		body: "Enhance your style and stay connected with our exquisite collection of watches. From timeless classics to modern marvels, our watches combine precision craftsmanship with cutting-edge technology. Elevate your look and never miss a beat. Shop now and make a statement with our stunning timepieces.",
		cta: "Shop our watches now!",
		category: "watch",
	},
];

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1,
		);
	};

	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1,
		);
	};

	return (
		<div className="frame relative">
			<div
				className="slider duration-1000"
				style={{ transform: `translateX(-${100 * currentSlide}vw)` }}>
				{data.map((image) => (
					<Silde key={image.id} image={image} />
				))}
			</div>
			<div className="btns absolute z-[1] text-gray-50 text-2xl flex gap-10 bottom-20 w-screen justify-center">
				<button
					onClick={prevSlide}
					className="left-btn h-10 w-16  flex justify-center items-center bg-green-800 hover:bg-green-600">
					<span>
						<BsArrowLeft />
					</span>
				</button>
				<button
					onClick={nextSlide}
					className="right-btn h-10 w-16  flex justify-center items-center bg-green-800 hover:bg-green-600">
					<span>
						<BsArrowRight />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Slider;
