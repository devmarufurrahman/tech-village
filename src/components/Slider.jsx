import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const data = [
	{
		id: 1,
		src: "https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		alt: "Dslr Camera Canon",
	},
	{
		id: 2,
		src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		alt: "Smart Television LED",
	},
	{
		id: 3,
		src: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		alt: "Stylish Headphone",
	},
	{
		id: 4,
		src: "https://images.pexels.com/photos/1666759/pexels-photo-1666759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		alt: "Gaming console ps4",
	},
	{
		id: 5,
		src: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		alt: "QUARTZ Watch",
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
					<div
						className="slide"
						style={{ backgroundImage: `url(${image.src})` }}
						key={image.id}></div>
				))}
			</div>
			<div className="btns absolute z-[1] text-gray-50 text-2xl flex gap-10 bottom-20 w-screen justify-center">
				<button
					onClick={prevSlide}
					className="left-btn h-10 w-14 bg-white/40 backdrop-blur-xl flex justify-center items-center hover:bg-white/80 hover:text-black duration-200">
					<span>
						<BsArrowLeft />
					</span>
				</button>
				<button
					onClick={nextSlide}
					className="right-btn h-10 w-14 bg-white/40 backdrop-blur-xl flex justify-center items-center hover:bg-white/80 hover:text-black duration-200">
					<span>
						<BsArrowRight />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Slider;
