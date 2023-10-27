import { HeaderContainer, HeaderContent, ContentContainer, SeparatorMenu } from './styles'
import logoImg from '../../assets/logo.svg'
import { NavigationMenuHeader } from '../NavigationMenuHeader'
import { NavigationClient } from '../NavigationClient'


// TODO: Alterar para header ser sticky e ter outro z-index;
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <HeaderContent>

        <ContentContainer>
          <NavigationMenuHeader />
        </ContentContainer>
      </HeaderContent>

      <SeparatorMenu decorative />

      <NavigationClient />

    </HeaderContainer>
  )
}
