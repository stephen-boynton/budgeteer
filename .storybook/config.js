import { ModalProvider } from 'styled-react-modal';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs'

import { GlobalStyle } from '../client/styles/globalStyles';

// automatically import all files ending in *.stories.js
configure(require.context('../client', true, /\.stories\.js$/), module);

addParameters({
    viewport: {
        viewports: DEFAULT_VIEWPORT, // newViewports would be an ViewportMap. (see below for examples)
        defaultViewport: 'someDefault',
    },
});
addDecorator(withKnobs);
addDecorator(fn => (
    <>
        <GlobalStyle />
        <ModalProvider>
            {fn()}
        </ModalProvider>
    </>
))