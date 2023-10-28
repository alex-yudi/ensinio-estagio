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
        text-decoration-color: ${props => props.theme.color.brandColorTealPure};
        transition: all .3s;
    }
`

export const ContainerContentMainHome = styled.main`
    display: flex;
    gap: 9.5rem;

    margin-top: 4.19rem;
    margin-bottom: 6.69rem;
`

export const FooterMainHome = styled.footer`
    display: flex;
    justify-content: space-between;

    margin-bottom: 6.9rem;
`

export const LinkOtherResources = styled.a`
    all: unset;
    
    display: flex;
    align-items: center;
    gap: 2rem;

    font: ${props => props.theme.fonts.menuOptions};
    color: ${props => props.theme.color.neutralColor200};
    &>img{
        width: 2rem;
        height: 2rem;
    }

    &:hover {
        cursor: pointer;
        color:${props => props.theme.color.brandColorTealPure};
        transition: all .3s;
    }
`

export const LinkSeeMore = styled.a`
    all: unset;
    
    display: flex;
    align-items: center;
    gap:2rem;

    font:${props => props.theme.fonts.bodyLink};
    color:${props => props.theme.color.brandColorPure};

    &>img{
        width: 2rem;
        height: 2rem;
    }

    &:hover{
        cursor: pointer;
        color:${props => props.theme.color.brandColorTealPure};
        transform: scale(1.05);
        transition: all .3s;
    }
`