import { CheckedIcon, ContainerCardLanguage, FlagIcon, Language } from "./styles";
import brazilIcon from '../../../../../assets/flags/brazil.svg'
import usaIcon from '../../../../../assets/flags/usa.svg'
import spainIcon from '../../../../../assets/flags/spain.svg'
import checkIcon from '../../../../../assets/flags/checkmark-square.svg'

type CardLanguageProps = {
    language: "brazil" | "usa" | "spain";
    checked?: boolean;
}

export function CardLanguage({ language, checked }: CardLanguageProps) {
    const flagIcon = () => {
        switch (language) {
            case "brazil": return brazilIcon;
            case "usa": return usaIcon;
            case "spain": return spainIcon;
        }
    }
    const textCard = () => {
        switch (language) {
            case "brazil": return "PT";
            case "usa": return "EN";
            case "spain": return "ES";
        }
    }


    return (
        <ContainerCardLanguage>
            <FlagIcon src={flagIcon()} alt={language} />

            <Language>
                {textCard()}
            </Language>

            {
                checked &&
                <CheckedIcon src={checkIcon} />
            }

        </ContainerCardLanguage>
    )
}