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
			{/* Show error if error prop is true */}
			{error && onError()}

			{/* Show loading if loading prop is true */}
			{loading && onLoading()}

			{/* Show empty task message if loading is false and total tasks is false */}
			{!loading && !totalTasks && onEmptyTask()}

			{/* Show empty search result message if total tasks is false and do not have any value and searched tasks length is false */}
			{!!totalTasks && !searchedTasks.length && onEmptySearchResult(searchText)}

			{/* Show results if loading, error is false and searched tasks map method is true */}
			{!loading && !error && searchedTasks.map(renderTasks)}

			<ul className="task--list">{children}</ul>
		</>
	);
}

export { TaskList };
