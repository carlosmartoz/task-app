import "./TaskItem.css";
import { AiOutlineCheckSquare, AiFillCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";

function TaskItem({ title, completed, onComplete, onDelete }) {
	// Component UI
	return (
		<>
			<li className={`task--list-item ${completed && "task--list-completed"}`}>
				<div></div>

				{/* Click to use the method for complete a task, and change the icon depends if is true or false */}
				<span onClick={onComplete}>{completed ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}</span>

				<p>{title}</p>

				{/* Click to use the method for delete a task */}
				<span onClick={onDelete}>
					<AiOutlineCloseSquare />
				</span>
			</li>
		</>
	);
}

export { TaskItem };
