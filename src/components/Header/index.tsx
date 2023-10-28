import { HeaderContainer, HeaderContent, ContentContainer, SeparatorMenu } from './styles'
import logoImg from '../../assets/logo.svg'
import { NavigationMenuHeader } from '../NavigationMenuHeader'
import { NavigationClient } from '../NavigationClient'
import * as Separator from '@radix-ui/react-separator';


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

      <SeparatorMenu />

      <NavigationClient />

    </HeaderContainer>
  )
}
