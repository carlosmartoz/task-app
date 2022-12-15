import "./TaskApp.css";
import { useContext } from "react";
import { TaskList } from "../TaskList/TaskList";
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskButton } from "../TaskButton/TaskButton";
import { TaskLoader } from "../TaskLoader/TaskLoader";
import { TaskSearch } from "../TaskSearch/TaskSearch";
import { TaskContext } from "../TaskContext/TaskContext";

function TaskApp() {
	// Get props and methods from the TaskContext
	const { error, loading, searchedTasks, completeTask, deleteTask, openModal, setOpenModal } = useContext(TaskContext);

	// Main component UI
	return (
		<>
			{/* Condition if the modal is open only show the component TaskForm, otherwise show the rest of the components */}
			{!!openModal ? (
				<TaskForm setOpenModal={setOpenModal} />
			) : (
				<>
					<TaskSearch />

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

					<TaskButton setOpenModal={setOpenModal} />
				</>
			)}
		</>
	);
}

export { TaskApp };
