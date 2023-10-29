import { ButtonSeeVideoHero, ButtonStartHero, ContainerButtonsHero, ContainerContentHero, ContentHero, DescriptionContentHero, HeroContainer, ImageHero, TitleContentHero } from "./styles";
import manHero from '../../assets/man-hero.png'
import devicesIcon from '../../assets/devices.svg'
import playIcon from '../../assets/Play.svg'
import { TitleHat } from "../TitleHat";
import { useContextSelector } from "use-context-selector";
import { TranslationContext } from "../../stores/contexts/translationStore";


import i18next from "../../lib/i18next";

export function Hero() {
    const { t } = useContextSelector(
        TranslationContext,
        (context) => {
            return context
        },
    )

    const handleTeste = () => {
        console.log('clicou')
        i18next.changeLanguage('es')
    }
    return (
        <HeroContainer>
            <ContainerContentHero>
                <TitleHat
                    srcImg={devicesIcon}
                    color="fontLight"
                    alt=""
                    title={t('titleHatHero')}
                    opacity
                />
                <ContentHero>
                    <TitleContentHero>
                        {t('titleContentHero')}
                    </TitleContentHero>

                    <DescriptionContentHero>
                        {t('descriptionContentHero')}
                    </DescriptionContentHero>

                    <ContainerButtonsHero>
                        <ButtonStartHero
                            onClick={handleTeste}
                            type="button"
                        >
                            {t('buttonStartHero')}
                        </ButtonStartHero>

                        <ButtonSeeVideoHero>
                            <img src={playIcon} alt="" />
                            {t('buttonSeeVideoHero')}
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