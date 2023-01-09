import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTasks() {
	// Consume variables and methods from the custom hook useLocalStorage
	const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage("TASKS_V1", []);

	// useState Hook for search the value in the input
	const [searchValue, setSearchValue] = useState("");

	// useState Hook for open or close the modal
	const [openModal, setOpenModal] = useState(false);

	// Filter the completed task length
	const completedTasks = tasks.filter((task) => !!task.completed).length;

	// Save total tasks length
	const totalTasks = tasks.length;

	// Variable with empty array for the searchedTasks
	let searchedTasks = [];

	// Condition to evaluate if the length is more or equal to 1 and save tasks in searchedTasks otherwise filter tasks and transform to lowercase same to search text and return taskText and include searchText
	if (!searchValue.length >= 1) {
		searchedTasks = tasks;
	} else {
		searchedTasks = tasks.filter((task) => {
			const taskText = task.title.toLowerCase();

			const searchText = searchValue.toLowerCase();

			return taskText.includes(searchText);
		});
	}

	function randomNumberInRange(min, max) {
		// 👇️ get number between min (inclusive) and max (inclusive)
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Add task, create a new array and push the new value
	const addTask = (title) => {
		const newTasks = [...tasks];

		newTasks.push({ id: randomNumberInRange(1, 999999), completed: false, title });

		saveTasks(newTasks);
	};

	// Complete task, filter the task and create a new array with the complete task
	const completeTask = (title) => {
		const taskIndex = tasks.findIndex((task) => task.title === title);

		const newTasks = [...tasks];

		newTasks[taskIndex].completed ? (newTasks[taskIndex].completed = false) : (newTasks[taskIndex].completed = true);

		saveTasks(newTasks);
	};

	// Delete Task, filter the task and create a new array with the delete task
	const deleteTask = (title) => {
		const taskIndex = tasks.findIndex((task) => task.title === title);

		const newTasks = [...tasks];

		newTasks.splice(taskIndex, 1);

		saveTasks(newTasks);
	};

	// Provider with the values to import to others components
	return {
		loading,
		error,
		searchValue,
		setSearchValue,
		totalTasks,
		completedTasks,
		searchedTasks,
		completeTask,
		deleteTask,
		openModal,
		setOpenModal,
		addTask,
	};
}

export { useTasks };
