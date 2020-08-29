import React from 'react'
import tw, { styled } from 'twin.macro'
import GridDefault from '@/components/Grid'

const Container = tw.div`
  bg-black w-screen h-48 pt-8 pb-56
`
const Grid = tw(GridDefault)`
  grid-cols-2
`
const H1 = styled.h1`
  ${tw`text-white text-4xl font-chivo font-bold`}
  a {
    ${tw`no-underline text-red hover:underline`}
  }
`

const Hero: React.FC = () => {
  return (
    <Container>
      <Grid>
        <H1>
          Control Remoto es el podcast donde{' '}
          <a href="#about">Camilo y Matías </a>
          conversan sobre la vida y el trabajo remoto
        </H1>
      </Grid>
    </Container>
  )
}

export default Hero
