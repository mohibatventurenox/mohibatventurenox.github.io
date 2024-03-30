import { borders } from '@/app/utils';
import React from 'react';

function RepoCard({ name, visibility, languages }) {
	return (
		<div className=' w-[400px] p-3 border-gray-3 border-1 rounded-md flex items-center flex-col gap-5'>
			<div className='flex justify-between w-full'>
				<h4 className='text-blue-3 text-md'>{name}</h4>
				<span className='text-gray-5 border-gray-6 rounded-3xl px-[7px] border-1 text-xs flex items-center'>
					{visibility}
				</span>
			</div>
			<div className='flex gap-4 flex-wrap w-full'>
				{languages?.map((lang) => {
					return (
						<span
							className='flex items-center gap-1'
							key={lang.id}
						>
							<div
								className={`border-4 border-[${lang.color}]] rounded-[50%]`}
								style={{
									border: `5px solid ${lang.color}`,
								}}
							></div>
							<p className='text-gray-5 text-xs'>{lang.name}</p>
						</span>
					);
				})}
			</div>
		</div>
	);
}

export default RepoCard;
