import { number } from '@storybook/addon-knobs';
import { ProgressBar } from '.';

export default {
	component: ProgressBar,
	title: 'Progress Bar',
	decorators: [ (fn) => <div style={{ backgroundColor: '#1ca263', padding: '30px' }}>{fn()}</div> ]
};

export const main = () => {
	const amount = number('amount', 100);
	const total = number('total', 100);
	return <ProgressBar amount={amount} total={total} />;
};
