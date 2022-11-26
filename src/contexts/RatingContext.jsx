import { createContext, useState } from "react";

export const RatingContext = createContext();

export const RatingContextProvider = ({ children }) => {
	const [ratingValue, setRatingValue] = useState(null);

	return (
		<RatingContext.Provider value={{ ratingValue, setRatingValue }}>
			{children}
		</RatingContext.Provider>
	);
};
