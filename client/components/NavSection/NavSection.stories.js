import { number } from '@storybook/addon-knobs';
import { NavSection } from '.';

export default {
	component: NavSection,
	title: 'Nav Section',
	decorators: [(fn) => <div style={{ backgroundColor: '#1ca263', padding: '30px' }}>{fn()}</div>]
};

export const main = () => {
	return <NavSection />;
};
