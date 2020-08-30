import React from 'react'
import Layout from '@/components/Layout'
import tw, { styled } from 'twin.macro'
import DefaultGrid from '@/components/Grid'

const Container = tw.div`
  bg-white max-w-full relative px-4 md:px-8
`

const Grid = styled(DefaultGrid)`
  ${tw`relative pb-20 `}
`

function Page({ children, pageContext: { frontmatter } }) {
  return (
    <>
      <Layout frontmatter={frontmatter}>
        <Container>
          <Grid>{children}</Grid>
        </Container>
      </Layout>
    </>
  )
}

export default Page
