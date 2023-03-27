import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTasks() {
	const {
		error,
		loading,
		item: tasks,
		saveItem: saveTasks,
		synchronizeItem: synchronizeTasks,
	} = useLocalStorage("TASKS_V2", []);

	let searchedTasks = [];
	const totalTasks = tasks.length;
	const [searchValue, setSearchValue] = useState("");
	const [storageChange, setStorageChange] = useState(false);
	const completedTasks = tasks.filter((task) => !!task.completed).length;

	if (!searchValue.length >= 1) {
		searchedTasks = tasks;
	} else {
		searchedTasks = tasks.filter((task) => {
			const taskName = task.name.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return taskName.includes(searchText);
		});
	}

	const addTask = (name) => {
		const id = newTaskId();
		const newTasks = [...tasks];
		newTasks.push({ id, completed: false, name });
		saveTasks(newTasks);
	};

	const getTask = (id) => {
		const taskIndex = tasks.findIndex((task) => task.id === id);
		return tasks[taskIndex];
	};

	const completeTask = (id) => {
		const taskIndex = tasks.findIndex((task) => task.id === id);
		const newTasks = [...tasks];
		newTasks[taskIndex].completed ? (newTasks[taskIndex].completed = false) : (newTasks[taskIndex].completed = true);
		saveTasks(newTasks);
	};

	const editTask = (id, newName) => {
		const taskIndex = tasks.findIndex((task) => task.id === id);
		const newTasks = [...tasks];
		newTasks[taskIndex].name = newName;
		saveTasks(newTasks);
	};

	const deleteTask = (id) => {
		const taskIndex = tasks.findIndex((task) => task.id === id);
		const newTasks = [...tasks];
		newTasks.splice(taskIndex, 1);
		saveTasks(newTasks);
	};

	const states = { loading, error, searchValue, totalTasks, completedTasks, searchedTasks, storageChange, getTask };

	const statesUpdaters = {
		addTask,
		editTask,
		deleteTask,
		completeTask,
		setSearchValue,
		synchronizeTasks,
		setStorageChange,
	};

	return { states, statesUpdaters };
}

function newTaskId() {
	return Date.now();
}

export { useTasks };
