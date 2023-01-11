import { useStorageListener } from "./useStorageListener";

// Component UI
function TaskAlert({ synchronize, storageChange, setStorageChange }) {
	// Call to Custom Hook useStorageListener
	const { show, toggleShow } = useStorageListener(synchronize, storageChange, setStorageChange);

	if (show) {
		return (
			<div className="task--alert">
				<p>There have been new changes press the button to update.</p>
				<button className="task--button" onClick={() => toggleShow(false)}>
					<div>
						<span></span>
						<p>Refresh</p>
					</div>
				</button>
			</div>
		);
	} else {
		return null;
	}
}

export { TaskAlert };
