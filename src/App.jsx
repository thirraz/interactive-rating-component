import { useState } from "react";

import { Rating } from "./components/Rating.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="w-screen h-screen bg-darkBg flex flex-col items-center justify-center">
			<Rating />
		</div>
	);
}

export default App;
