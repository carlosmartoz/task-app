import { useTasks } from "./useTasks";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { TaskForm } from "../TaskForm";
import { TaskAlert } from "../TaskAlert";
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
		synchronizeTasks,
		storageChange,
		setStorageChange,
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
						loading={loading}
						storageChange={storageChange}
						onSearchValueChange={onSearchValueChange}
					/>

					{/* Hide Task list and create button if storageChange is false */}
					{!storageChange && (
						<>
							<TaskList
								error={error}
								loading={loading}
								totalTasks={totalTasks}
								searchedTasks={searchedTasks}
								searchText={searchValue}
								onError={() => <h3>There was an error 😥</h3>}
								onLoading={() => <TaskLoader count={3} />}
								onEmptyTask={() => <h3>Create your first task 🔥</h3>}
								onEmptySearchResult={(searchText) => <h3>{searchText} Is not found 😥</h3>}
								render={(task) => (
									<TaskItem
										key={task.id}
										title={task.title}
										completed={task.completed}
										onComplete={() => completeTask(task.title)}
										onDelete={() => deleteTask(task.title)}
									/>
								)}
							/>

							<TaskButton setOpenModal={setOpenModal} onClickButton={onClickButton} />
						</>
					)}

					{/* Alert if there is a change from another tab open */}
					<TaskAlert storageChange={storageChange} setStorageChange={setStorageChange} synchronize={synchronizeTasks} />
				</>
			)}
		</>
	);
}

export { TaskApp };
