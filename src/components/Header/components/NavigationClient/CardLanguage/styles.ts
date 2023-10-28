import styled from "styled-components";


export const ContainerCardLanguage = styled.div`
    display: flex;
    align-items: center;
    gap: 0.63rem;

    width: 8.625rem;
    height: 3rem;
    padding: 1.5rem;

    border-radius: 5px;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 0px 0.5px #5A5566;
    }
`

export const FlagIcon = styled.img`
        height: 1rem;
        width: 1rem;
`

export const Language = styled.span`
    font: ${props => props.theme.fonts.languageOptions};
    color: ${props => props.theme.color.neutralColor300};
`

export const CheckedIcon = styled.img`
    margin-left: 1rem;
`