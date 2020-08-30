import React from 'react'
import tw from 'twin.macro'
import Grid from '@/components/Grid'

const Container = tw.div`
 bg-black max-w-full relative text-center font-muli text-white text-sm pb-8 md:px-8
`

const Footer = () => {
  return (
    <Container>
      <Grid>
        <span>Control Remoto ©2020</span>
      </Grid>
    </Container>
  )
}

export default Footer
