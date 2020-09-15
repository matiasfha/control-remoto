import React from 'react'
import tw, { styled } from 'twin.macro'
import Hero from '@/components/Hero'
import scrollToRef, { ScrollContext } from '../utils/scrollToRef'
import Ilustracion from '@/assets/ilustracion.svg'

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
const HeroContent = () => {
  const { ref } = React.useContext(ScrollContext)

  const onClick = () => {
    scrollToRef(ref)
  }

  return (
    <Hero>
      <MobileSvg width="270px" height="219px" />
      <H1>
        Control Remoto es el podcast donde{' '}
        <span onClick={onClick}>Camilo y Matías </span>
        conversan sobre la vida y el trabajo remoto
      </H1>
      <DesktopSvg />
    </Hero>
  )
}

export default HeroContent
