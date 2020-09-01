import React from 'react'
import tw, { styled } from 'twin.macro'
import GridDefault from '@/components/Grid'
import scrollToRef, { ScrollContext } from '../utils/scrollToRef'
import Ilustracion from '@/assets/ilustracion.svg'

const Container = tw.div`
bg-dark max-w-full h-72 md:pt-8 pb-56 px-4 md:px-8
`
const Grid = tw(GridDefault)`
  grid-cols-1 md:grid-cols-2
`
const H1 = styled.h1`
  ${tw`text-white text-2xl md:text-4xl font-chivo font-bold text-left self-center`}
  span {
    ${tw`no-underline text-red hover:underline cursor-pointer`}
  }
`

const DesktopSvg = styled(Ilustracion)`
  justify-self: end;
  ${tw`hidden md:block`};
  @media (min-width: 768px) {
    max-width: 90%;
  }
`

const MobileSvg = styled(Ilustracion)`
  ${tw`md:hidden`}
  justify-self: center;
`

const Hero: React.FC = () => {
  const { ref } = React.useContext(ScrollContext)

  const onClick = () => {
    scrollToRef(ref)
  }

  return (
    <Container>
      <Grid>
        <MobileSvg width="270px" height="219px" />
        <H1>
          Control Remoto es el podcast donde{' '}
          <span onClick={onClick}>Camilo y Matías </span>
          conversan sobre la vida y el trabajo remoto
        </H1>
        <DesktopSvg />
      </Grid>
    </Container>
  )
}

export default Hero
