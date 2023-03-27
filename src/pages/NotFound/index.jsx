import React from "react";
import { useTasks } from "../useTasks";
import { TaskForm } from "../../components/TaskForm";

function NotFound() {
	const { statesUpdaters } = useTasks();
	const { addTask } = statesUpdaters;

	return <TaskForm label="Create new" submitText="Create a new Task" submitEvent={(text) => addTask(text)} />;
}

export { NotFound };
