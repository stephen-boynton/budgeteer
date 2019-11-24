import React from 'react';
import { toUpper } from 'lodash/fp'
import { StyledModal, Category, EventListItem, EventListContainer, Amount, DateTime, Description } from "./styles"
import { formatMoney } from '../../utils/formatToCurrency';

const noop = () => null;

export const EventList = ({ eventList = [], isOpen, toggleOpen }) => {
  return (
    <StyledModal isOpen={isOpen} onBackgroundClick={toggleOpen} >
      <EventListContainer>
        {eventList.map((event) => (
          <EventListItem operator={event.operator}>
            <div>
              <Amount>
                {event.operator === 'subtract' ? ' - ' : ' + '}${formatMoney(event.amount)}
                <DateTime>{new Date(event.timestamp).toLocaleDateString()}</DateTime>
              </Amount>
              {event.category ? <Category>{toUpper(event.category)}</Category> : null}
              <Description>{event.note}</Description>
            </div>
          </EventListItem>
        ))}
      </EventListContainer>
    </StyledModal>
  )
}
