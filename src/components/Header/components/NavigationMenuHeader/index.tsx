import { MenuContainer, MenuContent, MenuItem, MenuLink, MenuTrigger, MenuTriggerContent, MenuViewPort, IconMenuTrigger } from './styles';

export function NavigationMenuHeader() {
    return (
        <MenuContainer>
            <MenuContent>
                <MenuItem>
                    <MenuTrigger>
                        Soluções
                        <IconMenuTrigger />
                    </MenuTrigger>

                    <MenuTriggerContent>
                        Teste
                        <MenuLink>
                            Link para algum lugar
                        </MenuLink>
                    </MenuTriggerContent>
                </MenuItem>
                <MenuItem>Preços</MenuItem>
                <MenuItem>Academy</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Contato</MenuItem>
            </MenuContent>

            <MenuViewPort />
        </MenuContainer>
    )
}