import "./TaskList.css";

function TaskList({
	children,
	error,
	loading,
	searchedTasks,
	totalTasks,
	searchText,
	onError,
	onLoading,
	onEmptyTask,
	onEmptySearchResult,
	render,
}) {
	const renderTasks = children || render;

	// Component UI
	return (
		<>
			{error && onError()}
			{loading && onLoading()}
			{!loading && !totalTasks && onEmptyTask()}
			{!!totalTasks && !searchedTasks.length && onEmptySearchResult(searchText)}

			{searchedTasks.map(renderTasks)}
			<ul className="task--list">{children}</ul>
		</>
	);
}

export { TaskList };
