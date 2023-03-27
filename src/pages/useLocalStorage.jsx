import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
	const { synchronizedItem, loading, error, item } = state;

	const onSynchronize = () => dispatch({ type: actionTypes.synchronize });
	const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
	const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem });
	const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });

	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}

				onSuccess(parsedItem);
			} catch (error) {
				onError(error);
			}
		}, 1000);
	}, [synchronizedItem]);

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

	return { item, saveItem, loading, error, synchronizeItem };
}

const initialState = ({ initialValue }) => ({
	error: false,
	loading: true,
	item: initialValue,
	synchronizedItem: true,
});

const actionTypes = {
	save: "SAVE",
	error: "ERROR",
	success: "SUCCESS",
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
