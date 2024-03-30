import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
	//   const token = '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';
	const token = sessionStorage.getItem('token');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export const setApolloToken = (token) => {
	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
			},
		};
	});

	client.setLink(authLink.concat(httpLink));
};

client.setLink(authLink.concat(httpLink));

export default client;
