import * as ACTIONS from '../actions/auth-actions';

const initialAuthState = {
	user: undefined,
	userRepositories: undefined
};

export const authReducer = (state = initialAuthState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTIONS.SET_USER:{
			return (state = {
				...state,
				user: payload,
			});
		}
		case ACTIONS.SET_USER_REPOSITORIES:{
			return (state = {
				...state,
				userRepositories: payload,
			});
		}
		default:
			return state;
	}
};
