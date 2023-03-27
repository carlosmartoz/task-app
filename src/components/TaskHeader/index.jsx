function TaskHeader({ loading, totalTasks, searchValue, storageChange, completedTasks, onSearchValueChange }) {
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
							{completedTasks} / {totalTasks}
						</span>
					</h3>
				</div>

				<input
					type="text"
					value={searchValue}
					onChange={onSearchValueChange}
					className="task--search-input"
					placeholder="Search for a task"
					disabled={loading || storageChange}
				/>
			</div>
		</>
	);
}

export { TaskHeader };
