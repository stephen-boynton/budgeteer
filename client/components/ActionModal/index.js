import { Form, Input, ButtonContainer, Button, Title, Total, StyledModal } from './styles';
import { formatMoney } from '../../utils/formatToCurrency';

export const ActionModal = ({
	isOpen = true,
	handleModal,
	updateFn,
	title,
	total,
}) => {
	return (
		<StyledModal
			onBackgroundClick={handleModal}
			onEscapeKeydown={handleModal}
			isOpen={isOpen}
		>
			<Form>
				<Title>{title}</Title>
				<Total>Current: ${formatMoney(total)}</Total>
				<Input type="number" placeholder="Amount" />
				<Input placeholder="Note" />
				<ButtonContainer>
					<Button onClick={updateFn}>Submit</Button>
					<Button onClick={handleModal}>Cancel</Button>
				</ButtonContainer>
			</Form>
		</StyledModal>
	);
};
