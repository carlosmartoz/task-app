function TaskCreateButton({ onClick }) {
	return (
		<>
			<button className="task--button-create" onClick={onClick}>
				<div>
					<span></span>
					<p>New Task</p>
				</div>
			</button>
		</>
	);
}

export { TaskCreateButton };
