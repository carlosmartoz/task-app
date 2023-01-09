import "./TaskSearch.css";

function TaskSearch({ searchValue, totalTasks, completedTasks, onSearchValueChange }) {
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
