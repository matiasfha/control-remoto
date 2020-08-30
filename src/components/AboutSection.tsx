import React from 'react'
import tw, { styled } from 'twin.macro'
import Grid from '@/components/Grid'
import Instagram from '@/assets/instagram-brands.svg'
import Twitter from '@/assets/twitter-brands.svg'
import Egghead from '@/assets/egghead.svg'

const Container = tw.div`
  bg-black grid grid-rows-1 max-w-full py-12 gap-12 px-4 md:px-8
`
const Title = tw.h1`
  text-center text-red font-chivo font-bold leading-8
`
const Copy = tw.p`
  italic text-white font-playfair text-xl text-center
`

const Columns = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 md:gap-8 w-full py-16`}
  justify-items: center;
`

const Card = styled.div`
  ${tw`flex flex-col items-center justify-between mb-8`}
  h2 {
    ${tw`font-chivo text-white text-xl leading-6 font-bold mb-0`}
  }
  h3 {
    ${tw`font-chivo text-white leading-5 text-lg font-normal m-0`}
  }
  p {
    ${tw`font-muli text-white leading-5 text-sm pt-4 text-center`}
  }
  img {
    ${tw`rounded-full w-32`}
  }
`

const Social = styled.div`
  ${tw`flex flex-row items-center justify-around`}
  a {
    ${tw`no-underline h-8 w-8 border-white border-solid border rounded-full`}
    margin-right: 5px;
  }
  svg {
    padding-top: 0.5rem;
    padding-left: 0.35rem;
  }
`

const Matias = () => {
  return (
    <Card>
      <img
        src="https://avatars3.githubusercontent.com/u/282006?s=400&u=a9d3c26dc6c2cfc5cbe04192b1fd6c2bb29c9be5&v=4"
        alt="@matiasfha"
      />
      <h2>Matías Hernández</h2>
      <h3>El Informático</h3>
      <p>
        Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
        malesuada enim in dolor euismod, id commodo mi consect.
      </p>
      <Social>
        <a href="https://twitter.com/matiasfha">
          <Twitter width="20px" height="17px" />
        </a>
        <a href="https://instagram.com/matiasfha">
          <Instagram width="20px" height="17px" />
        </a>
        <a href="http://egghead.io/instructors/matias-francisco-hernandez-arellano?af=4cexzz">
          <Egghead width="20px" height="17px" />
        </a>
      </Social>
    </Card>
  )
}
const Camilo = () => {
  return (
    <Card>
      <img
        src="https://avatars0.githubusercontent.com/u/25529313?s=460&u=6c824ed96231f9337264e49dbe5349b693bdd05d&v=4"
        alt="@elcamilosoy"
      />
      <h2>Camilo Muñoz</h2>
      <h3>El Diseñador</h3>
      <p>
        Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
        malesuada enim in dolor euismod, id commodo mi consect.
      </p>
      <Social>
        <a href="https://twitter.com/elcamilosoy">
          <Twitter width="20px" height="17px" />
        </a>
        <a href="https://instagram.com/elcamilosoy">
          <Instagram width="20px" height="17px" />
        </a>
      </Social>
    </Card>
  )
}

const AboutSection: React.FC = () => {
  return (
    <Container>
      <Grid>
        <div id="about">
          <Title>Control Remoto es</Title>
          <Copy>
            Después de 8 años de trabajo remoto, Camilo y Matias se embarcan en
            la idea de comunicar sus experiencias y nos hablan del trabajo a
            distancia y la vida en un intento de mantener la cordura desde su
            encierro.
          </Copy>
        </div>
        <Columns>
          <Camilo />
          <Matias />
        </Columns>
      </Grid>
    </Container>
  )
}

export default AboutSection
