import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { Container, Title, IconContainer } from './styles';
import { BigMoney } from '../BigMoney';
import { ProgressBar } from '../ProgressBar';
import { IconButton } from '../IconButton';

const noop = (x) => null;

export const OverViewStatus = ({ total, amount, title, addFn = noop, substractFn = noop }) => {
	return (
		<Container>
			{title && <Title>{title}</Title>}
			<BigMoney amount={amount} />
			<ProgressBar total={total} amount={amount} />
			<IconContainer>
				<IconButton icon={faPlus} onClick={addFn} />
				<IconButton icon={faMinus} iconColor="#e6494c" onClick={substractFn} />
			</IconContainer>
		</Container>
	);
};
