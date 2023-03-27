import { AiOutlineCheckSquare, AiFillCheckSquare, AiOutlineCloseSquare, AiFillEdit } from "react-icons/ai";

function TaskItem({ name, completed, onDelete, onComplete, onEdit }) {
	return (
		<>
			<li className={`task--list-item ${completed && "task--list-completed"}`}>
				<div className="task--list-item_hover"></div>

				<span onClick={onComplete}>{completed ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}</span>

				<p>{name}</p>

				<div className="task--list-item_icons">
					<span onClick={onEdit}>
						<AiFillEdit />
					</span>

					<span onClick={onDelete}>
						<AiOutlineCloseSquare />
					</span>
				</div>
			</li>
		</>
	);
}

export { TaskItem };
