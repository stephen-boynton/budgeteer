import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Container, Title, IconContainer } from './styles';
import { BigMoney } from '../BigMoney';
import { ProgressBar } from '../ProgressBar';
import { IconButton } from '../IconButton';
import { ActionModal } from '../ActionModal';

const noop = (x) => null;

export const OverViewStatus = ({
	total,
	amount,
	title,
	allowActions = true,
	addFn = noop,
	subtractFn = noop
}) => {
	const [isAddModalOpen, setAddModalOpen] = useState(false);
	const [isSubtractModalOpen, setSubtractModalOpen] = useState(false);
	const handleModal = (setModalOpen, isOpen) => (e) => {
		e.preventDefault();
		setModalOpen(!isOpen)
	}

	const handleAddModal = handleModal(setAddModalOpen, isAddModalOpen);
	const handleSubtractModal = handleModal(setSubtractModalOpen, isSubtractModalOpen);
	return (
		<Container>
			{title && <Title>{title}</Title>}
			<BigMoney amount={amount} />
			<ProgressBar total={total} amount={amount} />
			{allowActions &&
				<>
					<IconContainer>
						<IconButton icon={faPlus} onClick={handleAddModal} />
						<IconButton icon={faMinus} iconColor="#e6494c" onClick={handleSubtractModal} />
					</IconContainer>
					<ActionModal title={`Add to ${title}`} total={amount} updateFn={addFn} isOpen={isAddModalOpen} handleModal={handleAddModal} />
					<ActionModal title={`Deduct from ${title}`} total={amount} updateFn={subtractFn} isOpen={isSubtractModalOpen} handleModal={handleSubtractModal} />
				</>
			}
		</Container>
	);
};
