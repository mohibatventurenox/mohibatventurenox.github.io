'use client';

import { borders } from '@/app/utils';
import * as userActions from '../../redux/actions/auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RepoCard from './RepoCard';
import { Spinner } from '@chakra-ui/react';

function MyRepositories() {
	const dispatch = useDispatch();
	const { loading, data, error } =
		useSelector((state) => state.authReducer.userRepositories) || {};
	useEffect(() => {
		dispatch(userActions.fetchUserRepositories());
		return () => {
			dispatch(userActions.resetUserRepositories());
		};
	}, []);

	return (
		<div
			style={{ border: borders['border-blue'] }}
			className='flex flex-grow box-border w-fit h-full justify-center items-center flex-col text-gray-0 gap-3 overflow-hidden'
		>
			<h4 className='text-xl w-full'>Repositories</h4>
			<div
				className='h-[70%] w-[70vw] overflow-y-auto'
				style={{ border: borders['border-red'] }}
			>
				{loading && (
					<div className='w-full h-full flex items-center justify-center'>
						<Spinner speed='0.65s' style={{ height: '32px', width: '32px' }} />
					</div>
				)}

				<div
					style={{ border: borders['border-green'] }}
					className=' flex flex-wrap justify-between gap-5 p-2'
				>
					{data?.map((repo, index) => {
						return (
							<RepoCard
								key={repo.id}
								name={repo.name}
								visibility={repo.visibility}
								languages={repo.languages.nodes}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default MyRepositories;
