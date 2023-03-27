import { useEffect } from "react";

function useStorageListener(storageChange, setStorageChange, synchronize) {
	useEffect(() => {
		const onChange = (change) => {
			if (change.key === "TASKS_V2") {
				setStorageChange(true);
			}
		};

		window.addEventListener("storage", onChange);

		return () => {
			window.removeEventListener("storage", onChange);
		};
	}, []);

	const toggleShow = () => {
		synchronize();
		setStorageChange(false);
	};

	return {
		show: storageChange,
		toggleShow,
	};
}

export { useStorageListener };
