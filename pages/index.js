import { useState } from 'react';
import Router from 'next/router';
import nookies from 'nookies';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks'
import { LOGIN } from '../client/gql'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 40px;
`

const Input = styled.input`
	width: 200px;
	height: 20px;
	margin: 5px 0;
	font-size: 16px;

	@media (max-width: 500px) {
		height: 30px;
		font-size: 18px;
	}
`

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 200px;
	margin: 10px 0px;
`

export const Button = styled.button`
	padding: 5px;
	font-size: 16px;

	:hover {
		background-color: #c4c6c6;
	}

	@media (max-width: 500px) {
		padding: 15px;
	}
`

export const TitleContainer = styled.div`
padding: 25px;
`

const App = ({ token }) => {
  if (token) Router.push('/budget');

  const [login, { data = {}, error }] = useMutation(LOGIN)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { email, password } })
  }

  if (data.login && data.login.token) {
    nookies.set({}, 'token', data.login.token);
    Router.push('/budget');
  }
  return (
    <Container>
      <TitleContainer>
        <Title>The Budgeteer</Title>
      </TitleContainer>
      <LoginForm>
        <Input placeholder="Email" onChange={handleEmail} />
        <Input placeholder="Password" type="password" onChange={handlePassword} />
        <ButtonContainer>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
          <Button>Cancel</Button>
        </ButtonContainer>
      </LoginForm>
    </Container>
  )
}

App.getInitialProps = (ctx) => {
  const { token } = nookies.get(ctx);
  return { token }
}

export default App;
/**
 * There's a loop going on between the two pages trying to figure out auth, one has it, one doesn't
 */