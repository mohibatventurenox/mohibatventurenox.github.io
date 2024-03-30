'use client';

import { ChakraBaseProvider } from '@chakra-ui/react';

function ChakraUiProvider({ children }) {
	return <ChakraBaseProvider>{children}</ChakraBaseProvider>;
}

export default ChakraUiProvider;
