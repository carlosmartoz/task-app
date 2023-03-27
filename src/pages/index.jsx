import { New } from "./New";
import { Home } from "./Home";
import { Edit } from "./Edit";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/edit/:id" element={<Edit />} />
				<Route path="/new" element={<New />} />
				<Route path="*" element={<p>Not Found</p>} />
			</Routes>
		</HashRouter>
	);
}

export { App };
