import { useTasks } from "../useTasks";
import { useNavigate } from "react-router-dom";
import { TaskList } from "../../components/TaskList";
import { TaskItem } from "../../components/TaskItem";
import { TaskAlert } from "../../components/TaskAlert";
import { TaskLoader } from "../../components/TaskLoader";
import { TaskHeader } from "../../components/TaskHeader";
import { TaskCreateButton } from "../../components/TaskCreateButton";

function Home() {
	const navigate = useNavigate();
	const { states, statesUpdaters } = useTasks();
	const { loading, error, searchValue, totalTasks, completedTasks, searchedTasks, storageChange } = states;
	const { setSearchValue, completeTask, deleteTask, synchronizeTasks, setStorageChange } = statesUpdaters;

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<>
			<TaskHeader
				loading={loading}
				totalTasks={totalTasks}
				searchValue={searchValue}
				storageChange={storageChange}
				completedTasks={completedTasks}
				onSearchValueChange={onSearchValueChange}
			/>

			{!storageChange && (
				<>
					<TaskList
						error={error}
						loading={loading}
						totalTasks={totalTasks}
						searchText={searchValue}
						searchedTasks={searchedTasks}
						onLoading={() => <TaskLoader count={3} />}
						onError={() => <h3>There was an error 😥</h3>}
						onEmptyTask={() => <h3>Create your first task 🔥</h3>}
						onEmptySearchResult={(searchText) => <h3>{searchText} Is not found 😥</h3>}
						render={(task) => (
							<TaskItem
								key={task.id}
								name={task.name}
								completed={task.completed}
								onDelete={() => deleteTask(task.id)}
								onComplete={() => completeTask(task.id)}
								onEdit={() => navigate(`/edit/${task.id}`, { state: { task } })}
							/>
						)}
					/>

					<TaskCreateButton onClick={() => navigate("/new")} />
				</>
			)}

			<TaskAlert storageChange={storageChange} setStorageChange={setStorageChange} synchronize={synchronizeTasks} />
		</>
	);
}

export { Home };
