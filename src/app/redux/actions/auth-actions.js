import * as queries from '@/app/apollo-graphql/queries';
import client from '../../apollo-graphql/appollo-client';
import { gql } from '@apollo/client';

export const SET_USER = 'SET_USER';
export const SET_USER_REPOSITORIES = 'SET_USER_REPOSITORIES';

export const fetchUserData = () => async (dispatch) => {
	try {
		dispatch({
			type: SET_USER,
		});
		const { data } = await client.query({
			query: queries.GET_USER_DETAILS,
		});
		dispatch({
			type: SET_USER,
			payload: data.viewer,
		});
		return data.viewer;
	} catch (error) {
		dispatch({
			type: SET_USER,
			error: 'Something went wrong',
		});
	}
};

export const resetUserData = () => {
	return {
		type: SET_USER,
		payload: undefined,
	};
};

export const fetchUserRepositories =
	(first = 20) =>
	async (dispatch) => {
		try {
			dispatch({
				type: SET_USER_REPOSITORIES,
			});
			const { data } = await client.query({
				query: queries.GET_USER_REPOSITORIES,
				variables: {
					first: first,
				},
			});
			dispatch({
				type: SET_USER_REPOSITORIES,
				payload: data.viewer.repositories.nodes,
			});
			return data.viewer;
		} catch (error) {
			dispatch({
				type: SET_USER_REPOSITORIES,
				error: 'Something went wrong',
			});
			throw new Error('Something went wrong');
		}
	};

export const resetUserRepositories = () => {
	return {
		type: SET_USER_REPOSITORIES,
		payload: undefined,
	};
};
