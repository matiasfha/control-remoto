import React from 'react'
import { graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import DefaultGrid from '@/components/Grid'
import Player from '@/components/Player'
import Playlist from '@/components/Playlist'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import { ScrollContext } from '../utils/scrollToRef'

const Container = tw.div`
  bg-white max-w-full relative px-4 md:px-8
`

const Grid = styled(DefaultGrid)`
  ${tw`relative pb-20 `}
`

export default function Index({
  data: { site, allPodcastEpisodeControlRemoto },
}) {
  const lastEpisode = allPodcastEpisodeControlRemoto.nodes[0],
    { pathname } = new URL(lastEpisode.audio_url)
  let [, podcastId, episodeId] = pathname.split('/')

  episodeId = episodeId.split('.')[0]
  const embedUrl = `https://www.buzzsprout.com/${podcastId}/${episodeId}?client_source=admin&amp;iframe=true`

  const [ref, setRef] = React.useState(null)

  return (
    <Layout site={site}>
      <ScrollContext.Provider value={{ ref, setRef }}>
        <Hero />
        <Container>
          <Grid>
            <Player url={embedUrl} />
            <Playlist episodes={allPodcastEpisodeControlRemoto.nodes} />
          </Grid>
        </Container>
        <AboutSection />
      </ScrollContext.Provider>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteUrl
      }
    }
    allPodcastEpisodeControlRemoto(
      sort: { order: DESC, fields: published_at }
    ) {
      nodes {
        podcastName
        id
        title
        slug
        audio_url
        published_at(fromNow: true, locale: "es")
        remoteImage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 70) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`
