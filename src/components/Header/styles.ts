import styled from 'styled-components'
import * as Separator from '@radix-ui/react-separator';


export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 7rem;

    min-width: 100%;
    height: 5.5rem;
    
    & > img {
        width: 9.91925rem;
        height: 2.5rem;
        margin-right: 5rem;
    }

    position: absolute;
    top: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(15px);

    @media (max-width: 1250px) {
        padding: 0 4rem;
    }
`


export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SeparatorMenu = styled(Separator.Root)`
    width: 0.0625rem;
    height: 1.5rem;

    background-color: ${props => props.theme.color.brandColorTealLight};
`
