import React from "react";
import { useTasks } from "../useTasks";
import { TaskForm } from "../../components/TaskForm";

function New() {
	const { statesUpdaters } = useTasks();
	const { addTask } = statesUpdaters;

	return <TaskForm label="Create new" submitText="Create a new Task" submitEvent={(name) => addTask(name)} />;
}

export { New };
