import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled from "styled-components";
import { TriangleDownIcon } from '@radix-ui/react-icons';

export const NavigationMenuClientContainer = styled(NavigationMenu.Root)`
    display: flex;
    flex-direction: row;

    font: ${props => props.theme.fonts.menuOptions};
    color: ${props => props.theme.color.mainFontLight};

`

export const MenuClientList = styled(NavigationMenu.List)`
    list-style: none;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    gap: 2.5rem;
    width: 100%;

    @media (max-width: 1025px) {
        gap:1rem;
    }
`

export const ItemMenuClient = styled(NavigationMenu.Item)`

`
export const ClientSignIn = styled(NavigationMenu.Link)`
    display: flex;
    align-items: center;
    
    gap:0.2rem;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        box-shadow: 0 0 3px ${props => props.theme.color.brandColorTealPure};
        transition: box-shadow .3s;
        transition: cursor .3s;
    }
    @media (max-width: 375px) {
        display: none;
    }
`

export const StartButton = styled(NavigationMenu.Link)`
    width: 10rem;
    height: 2.5rem;
    padding:0.75rem 1.5rem;

    border: 1px solid #fff;
    border-radius: 5rem;

    &:hover{
        cursor: pointer;
        box-shadow: 0 0 3px ${props => props.theme.color.brandColorTealPure};
        transition: box-shadow .3s;
    }

    @media (max-width: 1250px) {
        width: 5rem;
        height: 2.5rem;
        padding: 0.5rem 1rem;
    }

    @media (max-width: 375px) {
        display: none;
    }
`

export const TriggerLanguages = styled(NavigationMenu.Trigger)`
    all: unset;
    display: flex;
    align-items: center;

    gap:0.2rem;
`
export const LanguagesToBeSelected = styled(NavigationMenu.Content)`
    width: 8.625rem;
    
    border-radius: 0.5rem;

    @media (max-width: 1250px) {
        width: 7rem;
    }
`

export const Viewport = styled(NavigationMenu.Viewport)`
    position: absolute;
    display: flex;
    justify-content: center;
    
    top:60%;
    right:1%;

    width: 8.625rem;
    border-radius: 0.5rem;

    background-color: #fff;

     @media (max-width: 1250px) {
        right:5%;
        width: 7rem;
    }
`
export const IconMenuTrigger = styled(TriangleDownIcon)`
    color: ${props => props.theme.color.brandColorTealLight}
`