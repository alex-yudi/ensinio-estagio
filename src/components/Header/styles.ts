import styled from 'styled-components'
import * as Separator from '@radix-ui/react-separator';


export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 7rem;

    width: 90rem;
    height: 5.5rem;
    
    & > img {
        width: 9.91925rem;
        height: 2.5rem;
    }
    
    border: 1px solid red;
    background-color: black; // TODO: TIRAR ISSO DPS
`

export const HeaderContent = styled.div`

`

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 100%;
`

export const SeparatorMenu = styled(Separator.Root)`
    &[data-orientation='vertical']{
        color: ${props => props.theme.color.brandColorTealLight};
        
        margin-right: 0.12rem;
    }
`
