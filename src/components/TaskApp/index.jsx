import "./TaskApp.css";
import { useTasks } from "./useTasks";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { TaskForm } from "../TaskForm";
import { TaskButton } from "../TaskButton";
import { TaskLoader } from "../TaskLoader";
import { TaskSearch } from "../TaskSearch";

function TaskApp() {
	// Get props and methods from the custom hook useTasks
	const {
		error,
		loading,
		searchedTasks,
		completeTask,
		deleteTask,
		openModal,
		setOpenModal,
		searchValue,
		setSearchValue,
		totalTasks,
		completedTasks,
		addTask,
	} = useTasks();

	// Save the value of what you type in the search engine in setSearchValue
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	// Method to open and close the modal
	const onClickButton = () => {
		setOpenModal(true);
	};

	// Component UI
	return (
		<>
			{/* Condition if the modal is open only show the component TaskForm, otherwise show the rest of the components */}
			{!!openModal ? (
				<TaskForm setOpenModal={setOpenModal} addTask={addTask} />
			) : (
				<>
					<TaskSearch
						searchValue={searchValue}
						totalTasks={totalTasks}
						completedTasks={completedTasks}
						onSearchValueChange={onSearchValueChange}
					/>

					<TaskList>
						{/* We display a message in case an error occurs */}
						{error && <h3>There was an error 😥</h3>}

						{/* We show a loading message, when the application is loading the data */}
						{loading && <TaskLoader count={3} />}

						{/* If you have finished loading and there are no tasks, a message is displayed to create the first task */}
						{!loading && !searchedTasks.length && !error && <h3>Create your first task 🔥</h3>}

						{searchedTasks.map((task) => (
							<TaskItem
								key={task.id}
								title={task.title}
								completed={task.completed}
								onComplete={() => completeTask(task.title)}
								onDelete={() => deleteTask(task.title)}
							/>
						))}
					</TaskList>

					<TaskButton setOpenModal={setOpenModal} onClickButton={onClickButton} />
				</>
			)}
		</>
	);
}

export { TaskApp };
