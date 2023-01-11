function TaskSearch({ searchValue, totalTasks, completedTasks, onSearchValueChange, loading, storageChange }) {
	// Component UI
	return (
		<>
			<div className="task--search">
				<div className={`task--search-counter ${!!loading || (storageChange && "task--search-loading")}`}>
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
					disabled={loading || storageChange}
				/>
			</div>
		</>
	);
}

export { TaskSearch };
