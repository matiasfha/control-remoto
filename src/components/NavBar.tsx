import React from 'react'

import tw from 'twin.macro'
import Logo from '@/assets/logo.svg'
import Link from '@/components/Link'
import Grid from '@/components/Grid'

const Nav = tw.nav`
  bg-black h-16 w-screen py-8
`
const Content = tw(Grid)`
  grid-flow-col-dense grid-cols-3 justify-between
`
const LogoImage = tw(Logo)`
  h-12 w-20
`
const Menu = tw.div`
  self-end text-white col-span-2
`

const MenuItem = tw(Link)`
  text-white no-underline text-base font-bold leading-5 px-6 font-muli
`

const Button = tw(MenuItem)`
  bg-red rounded-md py-3 ml-6 transition duration-500 ease-in-out transform hover:scale-125
`

const NavBar: React.FC = () => (
  <Nav>
    <Content>
      <Link to="/">
        <LogoImage />
      </Link>
      <Menu style={{ justifySelf: 'end' }}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">Episodios</MenuItem>
        <MenuItem to="/">Blog</MenuItem>
        <Button to="/">Únete a la comunidad</Button>
      </Menu>
    </Content>
  </Nav>
)

export default NavBar
