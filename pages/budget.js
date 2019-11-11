import React from 'react'
import { startCase } from 'lodash/fp'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { OverViewStatus } from '../client/components/OverViewStatus'
import { NavSection, fakeData } from '../client/components/NavSection'

// @TODO: PWA config: https://github.com/hanford/next-offline

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #a11b5a;
  z-index: 1000;
`

export default () => {
  const router = useRouter();
  const title = router.query.type
  const data = fakeData.budgets.find(b => b.section === title)

  return (
    <Container>
      <OverViewStatus title={startCase(title)} amount={data.amount} total={data.total} />
      <NavSection activeLink={title} />
    </Container>
  )
}
