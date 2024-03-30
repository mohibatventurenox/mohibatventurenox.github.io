import { useSelector } from 'react-redux';
import { Avatar, Flex, Box, Text, Badge } from '@chakra-ui/react';
import { borders } from '@/app/utils';
import Image from 'next/image';
import GithubIcon from '../../assets/github-mark-white.svg';
import { Search2Icon } from '@chakra-ui/icons';

function Navbar() {
	const { loading, data, error } =
		useSelector((state) => state.authReducer.user) || {};

	return (
		<nav
			className='bg-neutral-9 flex items-center justify-around p-3 w-full'
			style={{
				border: `${borders['border-red']}`,
			}}
		>
			<span className='flex  items-center gap-4'>
				<Image src={GithubIcon} height={32} width={32} alt='' />
				<h4 className='text-gray-0 font-bold text-lg'>Github</h4>
			</span>

			<span className='border-gray-3 text-gray-3 border-1 rounded-md px-2 py-1 flex gap-3 items-center'>
				<Search2Icon />
				<input
					placeholder='search'
					className=' bg-transparent font-thin outline-none text-white'
				/>
			</span>

			<Flex
				className=''
				style={{
					border: `${borders['border-blue']}`,
				}}
				alignItems='center'
			>
				<Avatar height={12} width={12} rounded={true} src={data?.avatarUrl} />
				<Box ml='3'>
					<Text fontWeight='bold' className='text-gray-0'>{data?.name || 'Mohib'}</Text>
					<Text className='text-gray-5' fontSize='sm'>
						{data?.login || 'mohibhabib'}
					</Text>
				</Box>
			</Flex>
		</nav>
	);
}

export default Navbar;
