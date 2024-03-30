'use client';

import React, { useEffect } from 'react';
import { borders } from '../utils';
import { useRouter } from 'next/navigation';
import { Spinner } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../redux/actions/auth-actions';

function PrivateRoute({ children }) {
	const router = useRouter();
	const dispatch = useDispatch();
	const { loading, data, error } =
		useSelector((state) => state.authReducer.user) || {};

	useEffect(() => {
		!data && dispatch(authActions.fetchUserData());
	}, []);

	return (
		<>
			{loading && (
				<div
					className='w-[100vw] h-[100vh] flex justify-center items-center'
					style={{ border: borders['border-green'] }}
				>
					<Spinner className=' text-blue-5 h-10 w-10' />
				</div>
			)}

			{data && children}

			{error && router.push('/')}
		</>
	);
}

export default PrivateRoute;
