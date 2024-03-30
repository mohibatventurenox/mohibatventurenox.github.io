import ReduxProvider from './redux/ReduxProvider';
import './globals.css';
import ChakraUiProvider from './ChakraUiProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Github',
	description: '',
};

export default function RootLayout({ children }) {
	return (
		<ReduxProvider>
			<html lang='en'>
				<body suppressHydrationWarning={true} className={`${inter.className} bg-gray-9`}>
					<ChakraUiProvider>{children}</ChakraUiProvider>
				</body>
			</html>
		</ReduxProvider>
	);
}
