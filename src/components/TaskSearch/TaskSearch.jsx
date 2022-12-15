import "./TaskSearch.css";
import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";

function TaskSearch() {
	// Get props and methods from the TaskContext
	const { searchValue, setSearchValue, totalTasks, completedTasks } = useContext(TaskContext);

	// Save the value of what you type in the search engine in setSearchValue
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	// Component UI
	return (
		<>
			<div className="task--search">
				<div className="task--search-counter">
					<h1>
						My <span>Tasks</span>
					</h1>

					<h3>
						Completed:{" "}
						<span>
							{/* Show the completed task and the total tasks */}
							{completedTasks} / {totalTasks}
						</span>
					</h3>
				</div>

				<input
					className="task--search-input"
					type="text"
					value={searchValue}
					placeholder="Search for a task"
					onChange={onSearchValueChange}
				/>
			</div>
		</>
	);
}

export { TaskSearch };
