'use client';

import React from 'react';
import { borders } from '../utils';
import Navbar from './components/Navbar';
import MyRepositories from './components/MyRepositories';
import PrivateRoute from '../routes/PrivateRoute';

function page() {
	return (
		<PrivateRoute>
			<div
				className=' w-[100vw] h-[100vh] overflow-y-auto flex flex-col items-center'
				style={{
					border: `${borders['border-red']}`,
				}}
			>
				<Navbar />
				<MyRepositories />
			</div>
		</PrivateRoute>
	);
}

export default page;
