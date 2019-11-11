import { ActionModal } from '.';
import { number, text } from '@storybook/addon-knobs';

export default {
	component: ActionModal,
	title: 'Action Modal',
	// decorators: [fn => (
	// 	<div style={{
	// 		display: 'flex',
	// 		justifyContent: 'center',
	// 		width: '100vw',
	// 		height: '100vh',
	// 		backgroundColor: 'blue'
	// 	}}>
	// 		{fn()}
	// 	</div>
	// )]
};

export const main = () => {
	const props = {};
	return <ActionModal {...props} />;
};
