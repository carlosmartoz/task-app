function TaskLoader({ count }) {
	const loaders = Array.from({ length: count }, (_, index) => {
		return <li key={index} className="task--loader"></li>;
	});

	return <>{loaders}</>;
}

export { TaskLoader };
