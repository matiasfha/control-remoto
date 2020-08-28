import React, { Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { createGlobalStyle } from 'styled-components'
import { MDXGlobalComponents, MDXLayoutComponents } from '@/components/mdx'
import tw from 'twin.macro'

import NavBar from '@/components/NavBar'
import Seo from '@/components/Seo'
// Import Twitter from "@/components/Twitter";

import 'prismjs/themes/prism-okaidia.css'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  pre {
    background-color: #2f1e2e !important;
    border-radius: 4px;
    font-size: 14px;
  }

  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
`

const Container = tw.div`
  top-0 relative bg-white w-screen h-screen
`

export default ({ site, frontmatter = {}, children }) => (
  <Fragment>
    <Seo site={site.siteMetadata} frontmatter={frontmatter} />
    <GlobalStyle />

    <MDXProvider
      components={{
        ...MDXLayoutComponents,
        ...MDXGlobalComponents,
      }}
    >
      <Container>
        <NavBar />
        {children}
      </Container>
    </MDXProvider>
  </Fragment>
)
