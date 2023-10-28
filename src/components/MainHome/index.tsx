import { TitleHat } from "../TitleHat";
import { ContainerMainHome, ContainerTitle, HatLink } from "./styles";
import lineIcon from '../../assets/line.svg'

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
                <HatLink
                    href=""
                >
                    Conheça alguns dos nossos recursos  ⚡️
                </HatLink>
            </ContainerTitle>
        </ContainerMainHome>
    )
}