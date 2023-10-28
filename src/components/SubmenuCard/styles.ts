import styled from "styled-components";

export const ContainerSubmenuCard = styled.div`
    display: flex;
    justify-content: flex-start;

    &>img {
        height: 2.5rem;
        width: 2.5rem;
    }
    &.vertical {
        flex-direction: column;
        gap: 1.5rem;
    }
    &.horizontal {
        flex-direction: row;
        gap: 1rem;
    }
`

export const ContainerTextSubmenuCard = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleSubmenuCard = styled.h2`
    width: 13rem;

    font: ${props => props.theme.fonts.submenuTitle};
    color:${props => props.theme.color.neutralColor100};
`

export const DescriptionSubmenuCard = styled.p`
    width: 13rem; 

    font: ${props => props.theme.fonts.submenuDescription};
    color: ${props => props.theme.color.neutralColor200};
`