import React from 'react'
import tw, { styled } from 'twin.macro'

import Spotify from '@/assets/spotify.svg'
import Apple from '@/assets/apple.svg'
import Google from '@/assets/google.svg'

const Container = styled.div`
  ${tw`-mt-32 rounded-md w-full pb-8`}
  h2 {
    ${tw`text-red text-center font-chivo font-bold text-3xl leading-8`}
  }
`

const Buttons = styled.div`
  ${tw`grid grid-cols-3 items-center justify-center py-4`}
  a {
    text-underline: none;
    justify-self: center;
  }
`

type Props = {
  url: string
}
const Player: React.FC<Props> = ({ url }: Props) => (
  <>
    <Container>
      <h2>Escucha nuestro último episodio</h2>
      <iframe
        src={url}
        width="100%"
        height="200"
        frameBorder="0"
        scrolling="no"
        title="Podcast Episode"
      />
      <Buttons>
        <a href="https://podcasts.apple.com/cl/podcast/control-remoto/id1511456545">
          <Spotify />
        </a>
        <a href="https://open.spotify.com/show/7ubkh0BN3QuBlcYFyCwzT6">
          <Apple />
        </a>
        <a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMDU3MzUxLnJzcw==">
          <Google />
        </a>
      </Buttons>
    </Container>
  </>
)

export default Player
