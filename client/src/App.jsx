import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";

function App() {
	return (
		<div>
			<Routes>
				<Route
					index
					element={<IndexPage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
