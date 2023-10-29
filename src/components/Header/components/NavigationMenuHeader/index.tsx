import { SubmenuCard } from './SubmenuCard';
import { MenuContainer, MenuContent, MenuItem, MenuTrigger, MenuTriggerContent, MenuViewPort, IconMenuTrigger, TitleSolutions, ContainerTriggerContent } from './styles';
import eadIcon from '../../../../assets/cards/ead.svg'
import socialIcon from '../../../../assets/cards/icon-social.svg'
import appIcon from '../../../../assets/cards/icon-app.svg'
import gamificationIcon from '../../../../assets/cards/icon-gamification.svg'
import { useContextSelector } from 'use-context-selector';
import { TranslationContext } from '../../../../stores/contexts/translationStore';

export function NavigationMenuHeader() {

    const { t } = useContextSelector(
        TranslationContext,
        (context) => {
            return context
        },
    )

    return (
        <MenuContainer>
            <MenuContent>
                <MenuItem>
                    <MenuTrigger>
                        {t("solutions")}
                        <IconMenuTrigger />
                    </MenuTrigger>

                    <MenuTriggerContent>
                        <TitleSolutions>
                            {t("titleHatSubmenuSolutions")}
                        </TitleSolutions>
                        <ContainerTriggerContent>
                            <SubmenuCard
                                title={t("coreSolutions")}
                                description='Lorem ipsum dolor sit amet'
                                orientation='horizontal'
                                iconSrc={eadIcon}
                            />
                            <SubmenuCard
                                title={t('createASchool')}
                                description='Lorem ipsum dolor sit amet'
                                orientation='horizontal'
                                iconSrc={socialIcon}
                            />
                            <SubmenuCard
                                title={t('gamification')}
                                description='Lorem ipsum dolor sit amet'
                                orientation='horizontal'
                                iconSrc={appIcon}
                            />
                            <SubmenuCard
                                title={t('createASchool')}
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
                <MenuItem> {t("prices")}</MenuItem>
                <MenuItem> {t("academy")}</MenuItem>
                <MenuItem> {t("blog")}</MenuItem>
                <MenuItem> {t("contact")}</MenuItem>
            </MenuContent>

            <MenuViewPort />
        </MenuContainer>
    )
}