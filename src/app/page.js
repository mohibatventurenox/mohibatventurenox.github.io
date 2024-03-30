'use client';

import Image from 'next/image';
import { borders } from './utils';
import GithubIcon from './assets/github-mark-white.svg';
import { useRouter } from 'next/navigation';
import * as authActions from './redux/actions/auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import { setApolloToken } from './apollo-graphql/appollo-client';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';

export default function Home() {
	const router = useRouter();
	const dispatch = useDispatch();
	const [token, setToken] = useState('');
	const { loading, data, error } =
		useSelector((state) => state.authReducer.user) || {};

	const onSignIn = () => {
		setApolloToken(token);
		dispatch(authActions.fetchUserData())
			.then(() => {
				sessionStorage.setItem('token', token);
				router.push('/home');
			})
	};

	const changeHandler = (event) => {
		const { value } = event.target;
		setToken(value);
	};

	return (
		<div className='flex min-h-screen justify-around items-center p-24'>
			<div
				className='flex flex-col text-lg place-items-center p-24 rounded-md max-w-[800px] w-11/12 gap-4'
				style={{ border: borders['border-red'] }}
			>
				<h1 className={`mb-3 text-6xl font-semibold text-gray-0`}>
					Where the world builds software
				</h1>
				<p className='text-gray-0'>
					Millions of developers and companies build, ship, and maintain their
					software on GitHub—the largest and most advanced development platform
					in the world.
				</p>

				<div className='flex gap-2 w-full'>
					<input
						onChange={changeHandler}
						value={token || ''}
						placeholder='Paste token here'
						className='py-2 px-4 rounded-md  outline-none'
					/>
					<Button
						isDisabled={loading ? loading : false}
						isLoading={loading ? loading : false}
						onClick={onSignIn}
						className=' text-gray-0 bg-green-4 px-8 py-2 rounded-3xl text-nowrap '
					>
						Sign In
					</Button>
				</div>
			</div>

			<div>
				<Image height={400} width={400} src={GithubIcon} alt='github-icon' />
			</div>
		</div>
	);
}
