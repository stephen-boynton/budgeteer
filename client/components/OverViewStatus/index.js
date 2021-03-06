import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Container, Title, IconContainer } from './styles';
import { BigMoney } from '../BigMoney';
import { ProgressBar } from '../ProgressBar';
import { IconButton } from '../IconButton';
import { ActionModal } from '../ActionModal';
import { GET_FULL_BUDGET } from '../../gql'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { startCase, getOr } from 'lodash/fp'
import { RED, PRIMARY } from '../../styles';

const UPDATE_BUDGET = gql`
  mutation UpdateBudget($type: String!, $action: Action!) {
    updateBudget(type: $type, action: $action){
      amount
    }
  }
`

const STATUS = {
	LOW_FUNDS: RED,
	NEGATIVE: '#9EA21A',
	HEALTHY: PRIMARY
}

export const OverViewStatus = ({
	total,
	amount,
	title,
	allowActions = true
}) => {
	const [isAddModalOpen, setAddModalOpen] = useState(false);
	const [isSubtractModalOpen, setSubtractModalOpen] = useState(false);

	const isRunningOut = (total * 0.1) > amount;
	const isNegative = amount < 0;

	const containerState = isRunningOut
		? STATUS.LOW_FUNDS
		: STATUS.HEALTHY

	const [updateBudget, { data = {}, error }] = useMutation(UPDATE_BUDGET, {
		ignoreResults: true,
		refetchQueries: [{ query: GET_FULL_BUDGET }]
	});

	const handleModal = (setModalOpen, isOpen) => () => {
		setModalOpen(!isOpen)
	}

	const handleAddModal = handleModal(setAddModalOpen, isAddModalOpen);
	const handleSubtractModal = handleModal(setSubtractModalOpen, isSubtractModalOpen);

	const handleUpdate = (operator) => (action) => {
		const payload = {
			variables:
			{
				action: {
					...action,
					operator
				},
				type: title
			}
		}

		updateBudget(payload)
	}

	const handleSubtractUpdate = handleUpdate('subtract');
	const handleAddUpdate = handleUpdate('add');

	if (error) console.log(error)

	return (
		<Container status={containerState}>
			{title && <Title>{startCase(title)}</Title>}
			<BigMoney amount={amount} />
			<ProgressBar total={total} amount={amount} />
			{allowActions &&
				<>
					<IconContainer>
						<IconButton icon={faPlus} onClick={handleAddModal} />
						<IconButton icon={faMinus} iconColor="#e6494c" onClick={handleSubtractModal} />
					</IconContainer>
					<ActionModal title={`Add to ${startCase(title)}`} total={amount} updateFn={handleAddUpdate} isOpen={isAddModalOpen} handleModal={handleAddModal} />
					<ActionModal title={`Deduct from ${startCase(title)}`} total={amount} updateFn={handleSubtractUpdate} isOpen={isSubtractModalOpen} handleModal={handleSubtractModal} />
				</>
			}
		</Container>
	);
};
