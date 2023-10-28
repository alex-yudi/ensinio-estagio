import { HeaderContainer, ContentContainer, SeparatorMenu } from './styles'
import logoImg from '../../assets/logo.svg'
import { NavigationMenuHeader } from './components/NavigationMenuHeader'
import { NavigationClient } from './components/NavigationClient'


// TODO: Alterar para header ser sticky e ter outro z-index;
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <ContentContainer>
        <NavigationMenuHeader />
      </ContentContainer>

      <SeparatorMenu />

      <NavigationClient />

    </HeaderContainer>
  )
}
