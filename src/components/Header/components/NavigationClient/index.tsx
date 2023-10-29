import { ClientSignIn, IconMenuTrigger, ItemMenuClient, Viewport, MenuClientList, NavigationMenuClientContainer, StartButton, TriggerLanguages, LanguagesToBeSelected } from "./styles";
import iconClient from '../../../../assets/icon-user.svg'
import { CardLanguage } from "./CardLanguage";
import { useContextSelector } from "use-context-selector";
import { TranslationContext } from "../../../../stores/contexts/translationStore";

export function NavigationClient() {

    const { t, currentLanguage, changeLanguage } = useContextSelector(
        TranslationContext,
        (context) => {
            return context
        },
    )

    const handlePortuguese = () => {
        changeLanguage("pt")
    }
    const handleEnglish = () => {
        changeLanguage("en")
    }
    const handleSpanish = () => {
        changeLanguage("es")
    }

    return (
        <NavigationMenuClientContainer>
            <MenuClientList>
                <ItemMenuClient>
                    <ClientSignIn>
                        <img src={iconClient} alt="Ícone do cliente" />
                        {t("signIn")}
                    </ClientSignIn>
                </ItemMenuClient>

                <ItemMenuClient>
                    <StartButton>
                        {t("startNow")}
                    </StartButton>
                </ItemMenuClient>

                <ItemMenuClient>
                    <TriggerLanguages>
                        {currentLanguage.toUpperCase()}
                        <IconMenuTrigger />
                    </TriggerLanguages>

                    <LanguagesToBeSelected>
                        <CardLanguage
                            onClick={handlePortuguese}
                            language="brazil"
                            checked={currentLanguage === "pt" && true}
                        />
                        <CardLanguage
                            onClick={handleEnglish}
                            language="usa"
                            checked={currentLanguage === "en" && true}
                        />
                        <CardLanguage
                            onClick={handleSpanish}
                            language="spain"
                            checked={currentLanguage === "es" && true}
                        />
                    </LanguagesToBeSelected>
                </ItemMenuClient>
            </MenuClientList>

            <Viewport />
        </NavigationMenuClientContainer>
    )
}
