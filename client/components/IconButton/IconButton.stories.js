import { number } from '@storybook/addon-knobs';
import { IconButton } from '.';

export default {
	component: IconButton,
	title: 'Icon Button',
	decorators: [ (fn) => <div style={{ backgroundColor: '#1ca263', padding: '30px' }}>{fn()}</div> ]
};

export const main = () => {
	return <IconButton />;
};
