import React from 'react';
import { number } from '@storybook/addon-knobs';
import { BigMoney } from './';

export default {
	component: BigMoney,
	title: 'Big Money',
	decorators: [ (fn) => <div style={{ backgroundColor: '#1ca263', padding: '30px' }}>{fn()}</div> ]
};

export const main = () => {
	const amount = number('amount', 3000);
	return <BigMoney amount={3000} />;
};
