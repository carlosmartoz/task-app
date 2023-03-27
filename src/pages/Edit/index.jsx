import { useTasks } from "../useTasks";
import { TaskForm } from "../../components/TaskForm";
import { useLocation, useParams } from "react-router-dom";

function Edit() {
	const location = useLocation();
	const params = useParams();
	const id = Number(params.id);

	const { states, statesUpdaters } = useTasks();
	const { loading, getTask } = states;
	const { editTask } = statesUpdaters;

	let taskName;

	if (location.state?.task) {
		taskName = location.state.task.name;
	} else if (loading) {
		return <p>Loading...</p>;
	} else {
		const task = getTask(id);
		taskName = task.name;
	}

	return (
		<TaskForm
			label="Edit a"
			submitText="Edit this Task"
			defaultTaskName={taskName}
			submitEvent={(newName) => editTask(id, newName)}
		/>
	);
}

export { Edit };
