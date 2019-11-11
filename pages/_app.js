import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal'
import { GlobalStyle } from '../client/styles/globalStyles';

const theme = {
	colors: {
		primary: '#0070f3'
	}
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<ModalProvider>
						<Component {...pageProps} />
					</ModalProvider>
				</ThemeProvider>
			</>
		);
	}
}
