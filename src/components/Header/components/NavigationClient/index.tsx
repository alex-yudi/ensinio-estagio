import { ClientSignIn, IconMenuTrigger, ItemMenuClient, Viewport, MenuClientList, NavigationMenuClientContainer, StartButton, TriggerLanguages, LanguagesToBeSelected } from "./styles";
import iconClient from '../../../../assets/icon-user.svg'
import { CardLanguage } from "./CardLanguage";

export function NavigationClient() {
    return (
        <NavigationMenuClientContainer>
            <MenuClientList>
                <ItemMenuClient>
                    <ClientSignIn>
                        <img src={iconClient} alt="Ícone do cliente" />
                        Entrar
                    </ClientSignIn>
                </ItemMenuClient>

                <ItemMenuClient>
                    <StartButton>
                        Começar agora
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
