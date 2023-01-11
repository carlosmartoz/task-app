import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

function TaskForm({ setOpenModal, addTask }) {
	// UseState Hook for the value of the input
	const [newTaskValue, setNewTaskValue] = useState("");

	// UseState Hook for validation of the form
	const [validation, setValidation] = useState(false);

	// Listen for changes in the input to save it in the hook
	const onChange = (event) => {
		setNewTaskValue(event.target.value);
	};

	// Method to submit the form data and save the new task
	const onSubmit = (event) => {
		// Prevent page reload from submit
		event.preventDefault();

		// Condition to prevent user to send an empty task
		if (event.target[0].value === "") {
			setValidation(true);
		} else {
			addTask(newTaskValue);
			setOpenModal(false);
		}
	};

	// Component UI
	return (
		<>
			<form onSubmit={onSubmit} className="task--form">
				<div className="task--form-container">
					<div>
						<h2>
							Create new <strong>Task</strong>
						</h2>

						<span onClick={() => setOpenModal(false)}>
							<AiOutlineCloseSquare />
						</span>
					</div>

					<textarea value={newTaskValue} onChange={onChange} type="text" placeholder="Write a new task" />
				</div>

				<button type="submit" className="task--form-button">
					<div>
						<span></span>
						<p>Create Task</p>
					</div>
				</button>

				{/* If the validation is true show a message to the user that is required to write something in the textarea */}
				{validation && <h4>You should write something for the task 😨</h4>}
			</form>
		</>
	);
}

export { TaskForm };
