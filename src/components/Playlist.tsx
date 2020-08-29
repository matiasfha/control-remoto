import React from 'react'
import tw, { styled } from 'twin.macro'

const Container = styled.div`
  ${tw`relative rounded-md`}
  box-shadow: 0 1px 20px 0 rgba(17,17,17,0.31);
`

const TitleContainer = styled.div`
  ${tw`p-6`}
  box-shadow: 0 1px 11px 0 rgba(17,17,17,0.13);
  h2 {
    ${tw`text-dark font-chivo font-bold text-3xl leading-10 my-0`}
  }
  p {
    ${tw`text-dark text-sm font-muli mb-0 mt-2`}
  }
`

const Episodes = tw.ul`
  overflow-y-auto h-72 px-0 my-0
`

const Episode = styled.li`
  ${tw`list-none`}
  a {
    ${tw`no-underline grid grid-cols-10 gap-1 justify-center items-center transition duration-500 ease-in-out hover:bg-gray-200 py-2 px-6 h-20`}
  }
  img {
    ${tw`h-12 w-12 rounded-md self-center`}
  }
  div {
    ${tw`col-span-6`}
  }
  h4 {
    ${tw`text-dark text-sm leading-6 font-bold font-muli m-0`}
  }
  span {
    ${tw`text-dark text-xs leading-5 font-muli`}
  }
`

type EpisodeT = {
  id: string
  audio_url: string
  title: string
  published_at: string
  remoteImage: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}
type PropsT = {
  episodes: Array<EpisodeT>
}

const getLink = (audio_url) => {
  return audio_url.split('.mp3').shift()
}

const Playlist: React.FC<PropsT> = ({ episodes }: PropsT) => {
  return (
    <Container>
      <TitleContainer>
        <h2>Episodios</h2>
        <p>
          Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In
          malesuada enim in dolor euismod, id commodo mi consect.
        </p>
      </TitleContainer>
      <Episodes>
        {episodes.map((node: EpisodeT) => (
          <Episode key={node.id}>
            <a href={getLink(node.audio_url)}>
              <img
                src={node.remoteImage.childImageSharp.fluid.src}
                alt={node.title}
              />
              <div>
                <h4>{node.title}</h4>
                <span>{node.published_at}</span>
              </div>
            </a>
          </Episode>
        ))}
      </Episodes>
    </Container>
  )
}

export default Playlist
