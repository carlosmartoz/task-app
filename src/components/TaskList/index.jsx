function TaskList({
	error,
	loading,
	children,
	totalTasks,
	searchText,
	searchedTasks,
	onLoading,
	onError,
	onEmptyTask,
	onEmptySearchResult,
	render,
}) {
	const renderTasks = children || render;

	return (
		<>
			<ul className="task--list">
				{error && onError()}

				{loading && onLoading()}

				{!loading && !totalTasks && onEmptyTask()}

				{!!totalTasks && !searchedTasks.length && onEmptySearchResult(searchText)}

				{!loading && !error && searchedTasks.map(renderTasks)}
			</ul>
		</>
	);
}

export { TaskList };
