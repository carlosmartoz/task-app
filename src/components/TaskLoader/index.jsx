import "./TaskLoader.css";

function TaskLoader({ count }) {
	// Method to render as many loaders as arrive by the props
	const loaders = Array.from({ length: count }, (_, index) => {
		return <li key={index} className="task--list-loader"></li>;
	});

	// Component UI
	return <>{loaders}</>;
}

export { TaskLoader };
