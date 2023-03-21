import { HashRouter, Route, Routes } from "react-router-dom";
import { TaskHome } from "./TaskHome";
import { TaskEdit } from "./TaskEdit";
import { TaskNew } from "./TaskNew";

function TaskApp() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<TaskHome />} />
				<Route path="/edit/:id" element={<TaskEdit />} />
				<Route path="/new" element={<TaskNew />} />
				<Route path="*" element={<p>Not Found</p>} />
			</Routes>
		</HashRouter>
	);
}

export { TaskApp };
