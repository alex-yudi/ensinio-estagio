import { ContainerSubmenuCard, ContainerTextSubmenuCard, DescriptionSubmenuCard, TitleSubmenuCard } from "./styles";

type SubmenuCardProps = {
    iconSrc?: string;
    title: string;
    description: string;
    orientation: "vertical" | "horizontal"
}

export function SubmenuCard({ iconSrc, title, description, orientation }: SubmenuCardProps) {
    return (
        <ContainerSubmenuCard className={`${orientation}`}>
            <img src={iconSrc} />
            <ContainerTextSubmenuCard>
                <TitleSubmenuCard>
                    {title}
                </TitleSubmenuCard>

                <DescriptionSubmenuCard>
                    {description}
                </DescriptionSubmenuCard>
            </ContainerTextSubmenuCard>
        </ContainerSubmenuCard>
    )
}