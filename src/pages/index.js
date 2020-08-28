import React from 'react'
import { graphql } from 'gatsby'
import tw, { styled } from 'twin.macro'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import DefaultGrid from '@/components/Grid'

const Container = tw.div`
 bg-white w-screen relative 
`

const Grid = tw(DefaultGrid)`
  max-w-screen-md relative
`

const PlayerContainer = tw.div`
  absolute -top-32 rounded-md w-full text-red text-center 
`

const PlayListContainer = styled.div`
  ${tw`relative top-32 rounded-md shadow-2xl`}
  div:first-of-type {
    background-color: #ffffff;
    box-shadow: 0 1px 20px 0 rgba(17, 17, 17, 0.31);
    ${tw`p-6`}
  }
  h2 {
    ${tw`text-dark text-3xl`}
  }
  p {
    ${tw`text-dark text-sm`}
  }
`

const EpisodesContainer = tw.ul`
  overflow-y-auto h-64
`

const Episode = styled.li`
  ${tw`w-full h-20 list-none grid grid-cols-4`}
  img {
    ${tw`h-12 w-12`}
  }

  div {
    ${tw`col-span-3`}
  }
  h4 {
    ${tw`text-dark text-sm leading-6 font-bold`}
  }
  p {
    ${tw`text-dark text-xs leading-5`}
  }
`

const PlayList = ({ episodes }) => {
  return (
    <PlayListContainer>
      <div>
        <h2>Episodios</h2>
        <p>
          Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
          malesuada enim in dolor euismod, id commodo mi consect.
        </p>
      </div>
      <EpisodesContainer>
        {episodes.map((node) => (
          <Episode key={node.id}>
            <img
              src={node.remoteImage.childImageSharp.fluid.src}
              alt={node.title}
            />
            <div>
              <h4>{node.title}</h4>
            </div>
          </Episode>
        ))}
      </EpisodesContainer>
    </PlayListContainer>
  )
}

const Player = ({ url }) => (
  <>
    <PlayerContainer>
      <h2>Escucha nuestro ultimo episodio</h2>
      <iframe
        src={url}
        width="100%"
        height="200"
        frameBorder="0"
        scrolling="no"
        title="Podcast Episode"
      />
    </PlayerContainer>
  </>
)

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
          <PlayList episodes={allPodcastEpisodeControlRemoto.nodes} />
        </Grid>
      </Container>
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
