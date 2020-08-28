import React from 'react'
import tw from 'twin.macro'
import GridDefault from '@/components/Grid'

const Container = tw.div`
  bg-black w-screen h-48 pt-20 pb-64
`

const Grid = tw(GridDefault)`
  grid-cols-2
`
const H1 = tw.h1`
  text-white text-4xl font-chivo font-bold
`
const Hero: React.FC = () => {
  return (
    <Container>
      <Grid>
        <H1>
          Control Remoto es el podcast donde Camilo y Matías conversan sobre la
          vida y el trabajo remoto
        </H1>
      </Grid>
    </Container>
  )
}

export default Hero
