import { ButtonSeeVideoHero, ButtonStartHero, ContainerButtonsHero, ContainerContentHero, ContentHero, DescriptionContentHero, HeroContainer, ImageHero, TitleContentHero } from "./styles";
import manHero from '../../assets/man-hero.png'
import devicesIcon from '../../assets/devices.svg'
import playIcon from '../../assets/Play.svg'
import { TitleHat } from "../TitleHat";

import { useTranslation } from "react-i18next";
import i18next from "../../lib/i18next";


export function Hero() {
    const { t } = useTranslation();

    const handleTeste = () => {
        console.log('clicou')
        i18next.changeLanguage('en')
    }
    return (
        <HeroContainer>
            <ContainerContentHero>
                <TitleHat
                    srcImg={devicesIcon}
                    color="fontLight"
                    alt=""
                    title="plataforma all in one"
                    opacity
                />
                <ContentHero>
                    <TitleContentHero>
                        {t('teste1')}<br />
                        Sua escola online <br />
                        poderosa e lucrativa
                    </TitleContentHero>

                    <DescriptionContentHero>
                        Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistemas EAD completo.
                    </DescriptionContentHero>

                    <ContainerButtonsHero>
                        <ButtonStartHero
                            onClick={handleTeste}
                            type="button"
                        >
                            Começar agora
                        </ButtonStartHero>

                        <ButtonSeeVideoHero>
                            <img src={playIcon} alt="" />
                            Ver vídeo
                        </ButtonSeeVideoHero>
                    </ContainerButtonsHero>
                </ContentHero>

            </ContainerContentHero>
            <ImageHero
                src={manHero}
            />
        </HeroContainer>
    )
}