import React from 'react'
import { graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'

import Layout from '@/components/Layout'
import HeroContent from './HeroContent'
import DefaultGrid from '@/components/Grid'
import Player from '@/components/Player'
import Playlist from '@/components/Playlist'

const Container = tw.div`
  bg-white max-w-full relative px-4 md:px-8
`

const Grid = styled(DefaultGrid)`
  ${tw`relative pb-20 max-w-screen-md`}
`

export default function Index({ data: { site, allFeedPodcast } }) {
  const lastEpisode = allFeedPodcast.nodes[0],
    { pathname } = new URL(lastEpisode.enclosure.url)
  let [, podcastId, episodeId] = pathname.split('/')

  episodeId = episodeId.split('.')[0]
  const embedUrl = `https://www.buzzsprout.com/${podcastId}/${episodeId}?client_source=admin&amp;iframe=true`

  return (
    <Layout>
      <HeroContent />
      <Container>
        <Grid>
          <Player url={embedUrl} />

          <Playlist
            episodes={allFeedPodcast.nodes}
            content={site.siteMetadata.pageContent.playList}
          />
        </Grid>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        pageContent {
          playList
          hero
        }
      }
    }
    allFeedPodcast(sort: { order: DESC, fields: isoDate }) {
      nodes {
        id
        title
        content
        enclosure {
          url
        }
        isoDate(fromNow: true, locale: "es")
        link
        itunes {
          image {
            attrs {
              href
            }
          }
        }
      }
    }
  }
`
