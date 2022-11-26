import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RatingContextProvider } from "./contexts/RatingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RatingContextProvider>
			<App />
		</RatingContextProvider>
	</React.StrictMode>
);
