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

export function MainHome() {
    const { t } = useContextSelector(
        TranslationContext,
        (context) => {
            return context
        },
    )

    return (
        <ContainerMainHome>
            <ContainerTitle>
                <TitleHat
                    srcImg={lineIcon}
                    title={t('titleHatMainHome')}
                    alt=""
                    color="brandColorDark"
                />
                <HatLink>
                    {t('hatLinkMainHome')} ⚡️
                </HatLink>
            </ContainerTitle>

            <ContainerContentMainHome>
                <ContentCard
                    title="Trilhas de etapas"
                    description={`
                Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.
                `}
                    iconSrc={trilhasIcon}
                    orientation="vertical"
                />

                <ContentCard
                    title="Playlists"
                    description={`
                    Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência offline.
                `}
                    iconSrc={playlistIcon}
                    orientation="vertical"
                />

                <ContentCard
                    title="Coleções"
                    description={`
                    Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência.
                `}
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