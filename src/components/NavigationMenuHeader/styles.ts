import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled from 'styled-components';

export const MenuContainer = styled(NavigationMenu.Root)`
    display: flex;
    align-items: center;
`

export const MenuContent = styled(NavigationMenu.List)`
    display: flex;
    justify-content: space-between;

    width: 50rem;

    border: 1px solid red;
`

export const MenuItem = styled(NavigationMenu.Item)`
    list-style: none;
`

export const MenuTrigger = styled(NavigationMenu.Trigger)`
    all:unset;

`

export const MenuTriggerContent = styled(NavigationMenu.Content)`

`

export const MenuLink = styled(NavigationMenu.Link)`

`

export const MenuViewPort = styled(NavigationMenu.Viewport)`
    position: absolute;
    display: flex;
    justify-content: center;
`