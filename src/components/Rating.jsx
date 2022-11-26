import { useState, useEffect, useContext } from "react";

import { ThankYou } from "./ThankYou";

//context
import { RatingContext } from "../contexts/RatingContext";

import star from "../assets/images/icon-star.svg";

export const Rating = () => {
	const { ratingValue, setRatingValue } = useContext(RatingContext);

	const [showThankYouComponent, setShowThankYouComponent] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setRatingValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowThankYouComponent(true);
	};

	useEffect(() => {
		setShowThankYouComponent(false);
	}, []);

	return (
		<>
			{!showThankYouComponent ? (
				<div className="w-[27rem] h-[27rem] px-9 bg-gray-800 rounded-[40px] font-overPass flex flex-col justify-around">
					<div className="w-12 h-12 bg-slate-700 flex items-center justify-center rounded-full">
						<img src={star} alt="star icon" />
					</div>
					<div className="w-auto h-auto">
						<h1 className="text-white text-[2rem] font-bold mb-2">
							How did we do?
						</h1>
						<p className="text-slate-400">
							Please let us know how we did with your
							support request. All feedback is appreciated
							to help us improve our offering!
						</p>
					</div>
					<div className="w-full h-auto flex">
						<form className="w-full text-white font-overPass flex justify-between flex-wrap">
							<button
								value="1"
								onClick={handleClick}
								className="w-12 h-12 rounded-full bg-buttonColor hover:bg-lGray focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-300 focus:bg-orangeColor"
							>
								1
							</button>
							<button
								value="2"
								onClick={handleClick}
								className="w-12 h-12 rounded-full bg-buttonColor hover:bg-lGray focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-300 focus:bg-orangeColor"
							>
								2
							</button>
							<button
								value="3"
								onClick={handleClick}
								className="w-12 h-12 rounded-full bg-buttonColor hover:bg-lGray focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-300 focus:bg-orangeColor"
							>
								3
							</button>
							<button
								value="4"
								onClick={handleClick}
								className="w-12 h-12 rounded-full bg-buttonColor hover:bg-lGray focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-300 focus:bg-orangeColor"
							>
								4
							</button>
							<button
								value="5"
								onClick={handleClick}
								className="w-12 h-12 rounded-full bg-buttonColor hover:bg-lGray focus:outline focus:outline-3 focus:outline-offset-2 focus:outline-orange-300 focus:bg-orangeColor"
							>
								5
							</button>
							<input
								type="submit"
								value="Submit"
								className="w-full py-4 text-white bg-orangeColor rounded-full mt-5 cursor-pointer tracking-[.2rem] font-bold uppercase hover:bg-white hover:text-orangeColor"
								onClick={handleSubmit}
							/>
						</form>
					</div>
				</div>
			) : (
				<ThankYou />
			)}
		</>
	);
};
