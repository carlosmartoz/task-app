import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseSquare } from "react-icons/ai";

function TaskForm({ label, submitText, defaultTaskName, submitEvent}) {
	const navigate = useNavigate();
	const [validation, setValidation] = useState(false);
	const [newTaskValue, setNewTaskValue] = useState(defaultTaskName || "");

	const onChange = (event) => {
		setNewTaskValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (event.target[0].value === "") {
			setValidation(true);
		} else {
			submitEvent(newTaskValue);
			navigate("/");
		}
	};

	return (
		<>
			<form onSubmit={onSubmit} className="task--form">
				<div className="task--form-container">
					<div>
						<h2>
							{label} <strong>Task</strong>
						</h2>

						<span onClick={() => navigate("/")}>
							<AiOutlineCloseSquare />
						</span>
					</div>

					<textarea value={newTaskValue} onChange={onChange} type="text" placeholder="Write a task..." />
				</div>

				<button type="submit" className="task--button-form">
					<div>
						<span></span>
						<p>{submitText}</p>
					</div>
				</button>

				{validation && <h4>You should write something for the task 😨</h4>}
			</form>
		</>
	);
}

export { TaskForm };
