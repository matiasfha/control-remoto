import React from 'react'
import tw from 'twin.macro'
import GridDefault from '@/components/Grid'

const Container = tw.div`
bg-dark max-w-full h-72 md:pt-8 pb-56 px-4 md:px-8
`
const Grid = tw(GridDefault)`
  grid-cols-1 md:grid-cols-2
`

const Hero: React.FC = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Grid>{children}</Grid>
    </Container>
  )
}

export default Hero
