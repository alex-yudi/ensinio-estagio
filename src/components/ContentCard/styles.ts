import styled from "styled-components";

export const ContainerContentCard = styled.div`
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

export const ContainerTextContentCard = styled.div`
    display: flex;
    flex-direction: column;

    gap:0.75rem;
`

export const TitleContentCard = styled.h2`
    width: 19rem;

    font: ${props => props.theme.fonts.tittleH20};
    color:${props => props.theme.color.neutralColor100};
`

export const DescriptionContentCard = styled.p`
    width: 19rem;

    font: ${props => props.theme.fonts.bodyText16};
    color: ${props => props.theme.color.neutralColor200};
`