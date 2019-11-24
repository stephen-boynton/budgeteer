import { Form, Input, ButtonContainer, Button, Title, Total, StyledModal } from './styles';
import { formatMoney } from '../../utils/formatToCurrency';
import { useState } from 'react';

export const ActionModal = ({
	isOpen = true,
	handleModal,
	updateFn,
	title,
	total,
}) => {
	const [amount, setAmount] = useState(null);
	const [note, setNote] = useState(null);

	const handleAmount = (e) => {
		setAmount(e.target.value)
	}

	const handleNote = (e) => {
		setNote(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		updateFn({ amount: parseFloat(amount, 10), note })
		handleModal();
	}

	return (
		<StyledModal
			onBackgroundClick={handleModal}
			onEscapeKeydown={handleModal}
			isOpen={isOpen}
		>
			<Form>
				<Title>{title}</Title>
				<Total>Current: ${formatMoney(total)}</Total>
				<Input onChange={handleAmount} type="number" placeholder="Amount" />
				<Input onChange={handleNote} type="text" placeholder="Note" />
				<ButtonContainer>
					<Button type="submit" onClick={handleSubmit}>Submit</Button>
					<Button onClick={handleModal}>Cancel</Button>
				</ButtonContainer>
			</Form>
		</StyledModal>
	);
};
