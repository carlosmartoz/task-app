import { useStorageListener } from "./useStorageListener";

function TaskAlert({ storageChange, setStorageChange, synchronize }) {
	const { show, toggleShow } = useStorageListener(storageChange, setStorageChange, synchronize);

	if (show) {
		return (
			<div className="task--alert">
				<p>There have been new changes press the button to update.</p>

				<button className="task--button-refresh" onClick={() => toggleShow(false)}>
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
