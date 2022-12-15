import "./TaskList.css";

function TaskList({ children }) {
	// Component UI
	return (
		<>
			<ul className="task--list">{children}</ul>
		</>
	);
}

export { TaskList };
