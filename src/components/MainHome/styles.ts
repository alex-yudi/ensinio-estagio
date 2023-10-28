import styled from "styled-components";

export const ContainerMainHome = styled.div`
    margin-top: 6.7rem;
    padding: 0 7rem;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HatLink = styled.a`
    all: unset;

    font: ${props => props.theme.fonts.bodyText16};
    color: ${props => props.theme.color.neutralColor200};

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

export const ContainerContentMainHome = styled.main`

`