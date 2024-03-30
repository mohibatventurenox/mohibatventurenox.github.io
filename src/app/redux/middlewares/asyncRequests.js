const AsyncMiddleware = (store) => (next) => (action) => {
	let modifyAction = action;
    if (action.hasOwnProperty('type')) {

		// Check if the action has a payload property
		if (action.hasOwnProperty('payload')) {
			// If the action has a payload, dispatch the action with loading false, data from payload, and error undefined
			modifyAction = {
				type: action.type,
				payload: { loading: false, data: action.payload, error: undefined },
			};
		}

		// Check if the action has an error property
		if (action.hasOwnProperty('error')) {
			// If the action has an error, dispatch the action with loading false, data undefined, and error message from action error
			modifyAction ={
				type: action.type,
				payload: {
					loading: false,
					data: undefined,
					error: action?.error || 'Something went wrong!', // Extract error message from action error
				},
			};
		}

		// Check if the action has neither payload nor error properties
		if (!action.hasOwnProperty('error') && !action.hasOwnProperty('payload')) {
			// If the action has neither payload nor error, dispatch the action with loading true, data undefined, and error undefined
			modifyAction ={
				type: action.type,
				payload: {
					loading: true,
					data: undefined,
					error: undefined,
				},
			};
		}
	}

	// Call the next middleware in the chain, or the default dispatch function
	const result = next(modifyAction);

	return result; // Return the result of calling the next middleware
};

export default AsyncMiddleware;
