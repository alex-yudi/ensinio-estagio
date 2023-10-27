import { HeaderContainer, HeaderContent, ContentContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import { NavigationMenuHeader } from '../NavigationMenuHeader'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <HeaderContent>

        <ContentContainer>
          <NavigationMenuHeader />
        </ContentContainer>
      </HeaderContent>

      <div>
        Login - Começar agora - Língua
      </div>
    </HeaderContainer>
  )
}
