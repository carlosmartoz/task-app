import "./TaskButton.css";

function TaskButton({ onClickButton }) {
	// Component UI
	return (
		<>
			<button className="task--button" onClick={onClickButton}>
				<div>
					<span></span>
					<p>New Task</p>
				</div>
			</button>
		</>
	);
}

export { TaskButton };
