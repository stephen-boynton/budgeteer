import React from 'react'
import styled from 'styled-components'
import { OverViewStatus } from '../client/components/OverViewStatus'
import { NavSection } from '../client/components/NavSection'

// @TODO: PWA config: https://github.com/hanford/next-offline

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #a11b5a;
  z-index: 1000;
`

export default () => (
  <Container>
    <OverViewStatus allowActions={false} title='Overview' amount={900} total={3650} />
    <NavSection activeLink={'all'} />
  </Container>
)
