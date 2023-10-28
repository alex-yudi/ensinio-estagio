import { ClientSignIn, IconMenuTrigger, ItemMenuClient, LanguagesToBeSelected, MenuClientList, NavigationMenuClientContainer, StartButton, TriggerLanguages } from "./styles";
import iconClient from '../../assets/icon-user.svg'

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
                </ItemMenuClient>
            </MenuClientList>

            <LanguagesToBeSelected />
        </NavigationMenuClientContainer>
    )
}
