import "./TaskButton.css";

function TaskButton({ setOpenModal }) {
	// Method to open and close the modal
	const onClickButton = () => {
		setOpenModal(true);
	};

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
