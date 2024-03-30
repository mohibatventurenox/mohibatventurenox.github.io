import { gql } from '@apollo/client';

export const GET_USER_DETAILS = gql`
	query {
		viewer {
			login
			name
			id
			avatarUrl
		}
	}
`;

export const GET_USER_REPOSITORIES = gql`
	query ($first: Int) {
		viewer {
			repositories(first: $first) {
				nodes {
					name
					id
					visibility
					languages(first: $first) {
						nodes {
							name
							color
                            id
						}
					}
				}
			}
		}
	}
`;
