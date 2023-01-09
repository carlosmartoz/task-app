import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
	// useState Hook for the loading state
	const [loading, setLoading] = useState(true);

	// useState Hook for the error state
	const [error, setError] = useState(false);

	// useState Hook for the item and initialValue of the localStorage item
	const [item, setItem] = useState(initialValue);

	// useEffect Hook that execute one time with a setTimeout to delay 1seg
	useEffect(() => {
		setTimeout(() => {
			// Try and Catch for managed the error statement
			try {
				// Get Item from Local Storage
				const localStorageItem = localStorage.getItem(itemName);

				// Create variable for parse the item in Local Storage
				let parsedItem;

				// Validate if Local Storage item exist if not, set a new one with the initialValue and save initialValue in the parse variable, for else simply parse the variable to a json
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));

					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				// Set the new item with the parse variable
				setItem(parsedItem);

				// Set the loading state
				setLoading(false);
			} catch (error) {
				// Set the error state
				setError(error);
			}
		}, 1000);
	}, []);

	// Save the item in the local Storage, try and catch to managed the error state and create a new constance and json stringify to set new item
	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);

			localStorage.setItem(itemName, stringifiedItem);

			setItem(newItem);
		} catch (error) {
			setError(error);
		}
	};

	// Return the essentials variables and methods
	return { item, saveItem, loading, error };
}

export { useLocalStorage };
