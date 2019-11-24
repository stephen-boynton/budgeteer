import { ActionModal } from '.';
import { number, text } from '@storybook/addon-knobs';

export default {
	component: ActionModal,
	title: 'Action Modal'
};

export const main = () => {
	const props = {};
	return <ActionModal {...props} />;
};
