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

const Container = tw.div`
 bg-white w-screen relative 
`

const Grid = styled(DefaultGrid)`
  ${tw`max-w-screen-md relative pb-20`}
`

export default function Index({
  data: { site, allPodcastEpisodeControlRemoto },
}) {
  const lastEpisode = allPodcastEpisodeControlRemoto.nodes[0],
    { pathname } = new URL(lastEpisode.audio_url)
  let [, podcastId, episodeId] = pathname.split('/')

  episodeId = episodeId.split('.')[0]
  const embedUrl = `https://www.buzzsprout.com/${podcastId}/${episodeId}?client_source=admin&amp;iframe=true`

  return (
    <Layout site={site}>
      <Hero />
      <Container>
        <Grid>
          <Player url={embedUrl} />
          <Playlist episodes={allPodcastEpisodeControlRemoto.nodes} />
        </Grid>
      </Container>
      <AboutSection />
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
