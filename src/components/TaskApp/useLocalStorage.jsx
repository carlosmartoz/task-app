import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
	const { synchronizedItem, loading, error, item } = state;

	//Action Creators
	const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
	const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });
	const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem });
	const onSynchronize = () => dispatch({ type: actionTypes.synchronize });

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

				onSuccess(parsedItem);
			} catch (error) {
				// Set the error state
				onError(error);
			}
		}, 1000);
	}, [synchronizedItem]);

	// Save the item in the local Storage, try and catch to managed the error state and create a new constance and json stringify to set new item
	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			onSave(newItem);
		} catch (error) {
			onError(error);
		}
	};

	const synchronizeItem = () => {
		onSynchronize();
	};

	// Return the essentials variables and methods
	return { item, saveItem, loading, error, synchronizeItem };
}

const initialState = ({ initialValue }) => ({
	synchronizedItem: true,
	loading: true,
	error: false,
	item: initialValue,
});

const actionTypes = {
	error: "ERROR",
	success: "SUCCESS",
	save: "SAVE",
	synchronize: "SYNCHRONIZE",
};

const reducerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true,
	},
	[actionTypes.success]: {
		...state,
		error: false,
		synchronizedItem: true,
		loading: false,
		item: payload,
	},
	[actionTypes.save]: {
		...state,
		item: payload,
	},
	[actionTypes.synchronize]: {
		...state,
		synchronizedItem: false,
		loading: true,
	},
});

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
