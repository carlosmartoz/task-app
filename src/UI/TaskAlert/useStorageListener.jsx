import { useEffect } from "react";

function useStorageListener(synchronize, storageChange, setStorageChange) {
	useEffect(() => {
		// Method to detect when there is a change in the storage
		const onChange = (change) => {
			if (change.key === "TASKS_V1") {
				console.log("There was changes in TASKS_V1");
				setStorageChange(true);
			}
		};

		// Event Listener to listen in storage
		window.addEventListener("storage", onChange);

		// Clean up the listener
		return () => {
			window.removeEventListener("storage", onChange);
		};
	}, []);

	// Method to toggle to show the alert or not
	const toggleShow = () => {
		synchronize();
		setStorageChange(false);
	};

	// Return the methods
	return {
		show: storageChange,
		toggleShow,
	};
}

export { useStorageListener };
