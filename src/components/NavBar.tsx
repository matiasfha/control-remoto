import React from 'react'

import tw from 'twin.macro'
import Logo from '@/assets/logo.svg'
import Link from '@/components/Link'
import Grid from '@/components/Grid'
import Cta from '@/components/Cta'
const Nav = tw.nav`
  bg-dark h-16 max-w-full px-4 md:px-8 lg:w-auto pt-4
`
const Content = tw(Grid)`
grid-flow-col grid-cols-3 justify-between md:grid-cols-4
`
const LogoImage = tw(Logo)`
  h-12 w-20
`
const Menu = tw.div`
self-end text-white col-span-2 lg:self-center md:col-span-3 md:self-center
`

const MenuItem = tw(Link)`
text-white no-underline text-base font-bold leading-5 px-6 font-muli hidden md:inline-block
`

const NavBar: React.FC = () => (
  <Nav>
    <Content>
      <Link to="/">
        <LogoImage />
      </Link>
      <Menu style={{ justifySelf: 'end' }}>
        <MenuItem to="/">Home</MenuItem>
        {/*<MenuItem to="/">Episodios</MenuItem>
           <MenuItem to="/">Blog</MenuItem>
          */}
        <Cta to="/comunidad">Únete a la comunidad</Cta>
      </Menu>
    </Content>
  </Nav>
)

export default NavBar
