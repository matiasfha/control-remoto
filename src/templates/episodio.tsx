import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/components/Layout'
import tw, { styled } from 'twin.macro'
import DefaultGrid from '@/components/Grid'
import DefaultPlayer from '@/components/Player'

const Container = tw.div`
  bg-white max-w-full relative px-4 md:px-8
`

const Grid = styled(DefaultGrid)`
  ${tw`relative pb-20 `}
`
const Player = styled(DefaultPlayer)`
  ${tw`mt-8`}
  h2 {
    display: none;
  }
`
const Description = styled.div`
  ${tw`text-dark font-muli text-lg`}
  a {
    ${tw`no-underline text-red hover:underline`}
  }
`
function Episodio({ data }) {
  const episode = data.podcastEpisodeControlRemoto
  const { pathname } = new URL(episode.audio_url)
  let [, podcastId, episodeId] = pathname.split('/')
  episodeId = episodeId.split('.')[0]
  const embedUrl = `https://www.buzzsprout.com/${podcastId}/${episodeId}?client_source=admin&amp;iframe=true`
  console.log(episode)
  return (
    <>
      <Layout
        frontmatter={{
          ...episode,
          keywords: episode.tags,
        }}
      >
        <Container>
          <Grid>
            <Player url={embedUrl} />
            <Description
              dangerouslySetInnerHTML={{ __html: episode.description }}
            />
          </Grid>
        </Container>
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    podcastEpisodeControlRemoto(fields: { id: { eq: $id } }) {
      title
      description
      audio_url
      tags
      published_at
      audio_url
    }
  }
`
export default Episodio
