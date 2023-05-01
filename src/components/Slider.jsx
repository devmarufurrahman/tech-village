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
	return (
		<div className="slider">
			{data.map((image) => (
				<div
					className="slide"
					style={{ backgroundImage: `url(${image.src})` }}
					key={image.id}></div>
			))}
		</div>
	);
};

export default Slider;
