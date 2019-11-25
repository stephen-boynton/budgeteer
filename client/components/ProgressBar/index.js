import { Line } from 'rc-progress';
import { Container, SummaryContainer, Money } from './styles';
import { formatMoney } from '../../utils/formatToCurrency';

export const ProgressBar = ({ total = 100, amount = 0 }) => {
	const percentage = amount < 0
		? 0 / total * 100
		: amount / total * 100;
	return (
		<Container>
			<Line percent={percentage} strokeWidth={3} strokeColor="#64f4af" trailColor="#154b33" trailWidth="2" />
			<SummaryContainer>
				<Money>${formatMoney(amount)}</Money>
				<Money>/</Money>
				<Money>${formatMoney(total)}</Money>
			</SummaryContainer>
		</Container>
	);
};
