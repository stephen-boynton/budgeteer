import { OverViewStatus } from '.';
import { number, text } from '@storybook/addon-knobs';

export default {
	component: OverViewStatus,
	title: 'Overview Status'
};

export const main = () => {
	const props = {
		amount: number('amount', 100),
		total: number('total', 100),
		title: text('title', 'Overview')
	};
	return <OverViewStatus {...props} />;
};
