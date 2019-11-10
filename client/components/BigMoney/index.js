import * as React from 'react';
import { Money } from './styles';
import { formatMoney } from '../../utils/formatToCurrency';

export const BigMoney = ({ amount }) => {
	const formatedMoney = formatMoney(amount);
	return (
		<div>
			<Money>${formatedMoney}</Money>
		</div>
	);
};
