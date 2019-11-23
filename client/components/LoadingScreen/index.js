import styled from 'styled-components'

import { PRIMARY } from '../../styles'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 50px;
  color: white;
  margin-bottom: 50px;
`

export const LoadingScreen = () => {
  return (
    <Container>
      <Title>
        The Budgeteer
      </Title>
    </Container>
  )
}