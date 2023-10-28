import { SubmenuCard } from '../../../SubmenuCard';
import { MenuContainer, MenuContent, MenuItem, MenuTrigger, MenuTriggerContent, MenuViewPort, IconMenuTrigger, TitleSolutions, ContainerTriggerContent } from './styles';
import eadIcon from '../../../../assets/cards/ead.svg'
import socialIcon from '../../../../assets/cards/icon-social.svg'
import appIcon from '../../../../assets/cards/icon-app.svg'
import gamificationIcon from '../../../../assets/cards/icon-gamification.svg'

export function NavigationMenuHeader() {
    return (
        <MenuContainer>
            <MenuContent>
                <MenuItem>
                    <MenuTrigger>
                        Soluções
                        <IconMenuTrigger />
                    </MenuTrigger>

                    <MenuTriggerContent>
                        <TitleSolutions>
                            Soluções principais
                        </TitleSolutions>
                        <ContainerTriggerContent>
                            <SubmenuCard
                                title='Crie uma Escola Online'
                                description='Lorem ipsum dolor sit amet'
                                orientation='horizontal'
                                iconSrc={eadIcon}
                            />
                            <SubmenuCard
                                title='Comunidade e rede social'
                                description='Lorem ipsum dolor sit amet'
                                orientation='horizontal'
                                iconSrc={socialIcon}
                            />
                            <SubmenuCard
                                title='Gamificação'
                                description='Lorem ipsum dolor sit amet'
                                orientation='horizontal'
                                iconSrc={appIcon}
                            />
                            <SubmenuCard
                                title='Aplicativo mobile'
                                description='Lorem ipsum dolor sit amet'
                                orientation='horizontal'
                                iconSrc={gamificationIcon}
                            />

                        </ContainerTriggerContent>
                        {/*                         <MenuLink>
                            Link para algum lugar
                        </MenuLink> */}
                    </MenuTriggerContent>
                </MenuItem>
                <MenuItem>Preços</MenuItem>
                <MenuItem>Academy</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Contato</MenuItem>
            </MenuContent>

            <MenuViewPort />
        </MenuContainer>
    )
}