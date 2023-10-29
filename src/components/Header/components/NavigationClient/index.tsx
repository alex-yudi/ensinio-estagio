import { ClientSignIn, IconMenuTrigger, ItemMenuClient, Viewport, MenuClientList, NavigationMenuClientContainer, StartButton, TriggerLanguages, LanguagesToBeSelected } from "./styles";
import iconClient from '../../../../assets/icon-user.svg'
import { CardLanguage } from "./CardLanguage";
import { useContextSelector } from "use-context-selector";
import { TranslationContext } from "../../../../stores/contexts/translationStore";

export function NavigationClient() {

    const { t } = useContextSelector(
        TranslationContext,
        (context) => {
            return context
        },
    )

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
                        PT
                        <IconMenuTrigger />
                    </TriggerLanguages>

                    <LanguagesToBeSelected>
                        <CardLanguage
                            language="brazil"
                            checked
                        />
                        <CardLanguage
                            language="usa"
                        />
                        <CardLanguage
                            language="spain"
                        />
                    </LanguagesToBeSelected>
                </ItemMenuClient>
            </MenuClientList>

            <Viewport />
        </NavigationMenuClientContainer>
    )
}
