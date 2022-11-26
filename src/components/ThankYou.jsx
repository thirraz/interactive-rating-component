import { useContext } from "react";

//context
import { RatingContext } from "../contexts/RatingContext";

import thankYouIllustration from "../assets/images/illustration-thank-you.svg";

export const ThankYou = () => {
	const { ratingValue } = useContext(RatingContext);

	return (
		<div className="w-[27rem] h-[27rem] px-9 bg-gray-800 rounded-[40px] font-overPass flex flex-col justify-around items-center">
			<div className="w-[10rem] h-28">
				<img
					src={thankYouIllustration}
					alt="An cellphone for illustrate the component"
				/>
			</div>

			<p className=" px-8 py-2 rounded-full bg-buttonColor text-orangeColor">
				You selected {ratingValue} out of 5
			</p>

			<div className="w-full h-auto text-center text-white">
				<h1 className="text-[1.8rem] mb-5 font-bold">Thank you!</h1>
				<p className="text-slate-400">
					We appreciate you taking the time to give a rating. If
					you ever need more support, don't hesitate to get in
					touch!
				</p>
			</div>
		</div>
	);
};
