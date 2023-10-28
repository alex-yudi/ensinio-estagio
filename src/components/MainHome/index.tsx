import { TitleHat } from "../TitleHat";
import { ContainerContentMainHome, ContainerMainHome, ContainerTitle, FooterMainHome, HatLink, LinkOtherResources, LinkSeeMore } from "./styles";
import lineIcon from '../../assets/line.svg'
import { ContentCard } from "../ContentCard";
import trilhasIcon from '../../assets/cards/icon-trilhas.svg'
import playlistIcon from '../../assets/cards/icon-playlists.svg'
import folderIcon from '../../assets/cards/icon-folder.svg'
import rocketIcon from '../../assets/Promotion, Rocket.svg'
import arrowRight from '../../assets/Arrow, Down.svg'

export function MainHome() {
    return (
        <ContainerMainHome>
            <ContainerTitle>
                <TitleHat
                    srcImg={lineIcon}
                    title="pensamos em cada detalhe"
                    alt=""
                    color="brandColorDark"
                />
                <HatLink>
                    Conheça alguns dos nossos recursos  ⚡️
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
                    Veja todos os outros recursos disponíveis para te ajudar
                </LinkOtherResources>

                <LinkSeeMore>
                    Ver mais
                    <img src={arrowRight} />
                </LinkSeeMore>
            </FooterMainHome>
        </ContainerMainHome>
    )
}