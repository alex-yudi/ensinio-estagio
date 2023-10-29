import { TitleHat } from "../TitleHat";
import { ContainerContentMainHome, ContainerMainHome, ContainerTitle, FooterMainHome, HatLink, LinkOtherResources, LinkSeeMore } from "./styles";
import lineIcon from '../../assets/line.svg'
import { ContentCard } from "../ContentCard";
import trilhasIcon from '../../assets/cards/icon-trilhas.svg'
import playlistIcon from '../../assets/cards/icon-playlists.svg'
import folderIcon from '../../assets/cards/icon-folder.svg'
import rocketIcon from '../../assets/Promotion, Rocket.svg'
import arrowRight from '../../assets/Arrow, Down.svg'
import { useContextSelector } from "use-context-selector";
import { TranslationContext } from "../../stores/contexts/translationStore";

import i18next from '../../lib/i18n/i18next'

export function MainHome() {
    const { t } = useContextSelector(
        TranslationContext,
        (context) => {
            return context
        },
    )

    const handleTeste = async () => {
        i18next.changeLanguage('en');
        return
    }

    return (
        <ContainerMainHome>
            <ContainerTitle>
                <TitleHat
                    srcImg={lineIcon}
                    title={t('titleHatMainHome')}
                    alt=""
                    color="brandColorDark"
                />
                <HatLink
                    onClick={handleTeste}
                >
                    {t('hatLinkMainHome')} ⚡️
                </HatLink>
            </ContainerTitle>

            <ContainerContentMainHome>
                <ContentCard
                    title={t('titleCard1')}
                    description={t('descriptionCard1')}
                    iconSrc={trilhasIcon}
                    orientation="vertical"
                />

                <ContentCard
                    title={t('titleCard2')}
                    description={t('descriptionCard2')}
                    iconSrc={playlistIcon}
                    orientation="vertical"
                />

                <ContentCard
                    title={t('titleCard3')}
                    description={t('descriptionCard3')}
                    iconSrc={folderIcon}
                    orientation="vertical"
                />
            </ContainerContentMainHome>

            <FooterMainHome>
                <LinkOtherResources>
                    <img src={rocketIcon} />
                    {t('linkOtherResources')}
                </LinkOtherResources>

                <LinkSeeMore>
                    {t('linkSeeMore')}
                    <img src={arrowRight} />
                </LinkSeeMore>
            </FooterMainHome>
        </ContainerMainHome>
    )
}