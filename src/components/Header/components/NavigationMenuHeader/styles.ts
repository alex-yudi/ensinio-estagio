import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled from 'styled-components';
import { TriangleDownIcon } from '@radix-ui/react-icons';

export const MenuContainer = styled(NavigationMenu.Root)`
    display: flex;
    align-items: center;

    font: ${props => props.theme.fonts.menuOptions};
    color: ${props => props.theme.color.mainFontLight};
`

export const MenuContent = styled(NavigationMenu.List)`
    list-style: none;

    display: flex;
    justify-content: space-between;

    gap:2.5rem;
`

export const MenuItem = styled(NavigationMenu.Item)`
    &:hover:nth-last-child(-n+4){
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.color.brandColorTealPure};
        transition: all .3s;
    }
`

export const MenuTrigger = styled(NavigationMenu.Trigger)`
    all:unset;
    display: flex;
    align-items: center;
`
export const IconMenuTrigger = styled(TriangleDownIcon)`
    color: ${props => props.theme.color.brandColorTealLight}
`

export const MenuTriggerContent = styled(NavigationMenu.Content)`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap:2.5rem;


    width: 40.1875rem;
    height: 16.4375rem;
`

export const TitleSolutions = styled.h2`
    font: ${props => props.theme.fonts.submenuTitle};
    color: ${props => props.theme.color.brandColorPure};
    text-transform: uppercase;
`

export const ContainerTriggerContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
`

export const MenuLink = styled(NavigationMenu.Link)`

`

export const MenuViewPort = styled(NavigationMenu.Viewport)`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 70%;

    width: 40.1875rem;
    height: 16.4375rem;
    border-radius: 0.375rem;

    background-color: #fff;
`