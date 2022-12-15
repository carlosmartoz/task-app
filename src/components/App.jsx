import { TaskApp } from "./TaskApp/TaskApp";
import { TaskProvider } from "./TaskContext/TaskContext";

function App() {
	// Component UI
	return (
		<>
			<TaskProvider>
				<TaskApp />
			</TaskProvider>
		</>
	);
}

export { App };
