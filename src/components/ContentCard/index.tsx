import { ContainerContentCard, ContainerTextContentCard, DescriptionContentCard, TitleContentCard } from "./styles";

type ContentCardProps = {
    iconSrc?: string;
    title: string;
    description: string;
    orientation: "vertical" | "horizontal"
}

export function ContentCard({ iconSrc, title, description, orientation }: ContentCardProps) {
    return (
        <ContainerContentCard className={`${orientation}`}>
            <img src={iconSrc} />
            <ContainerTextContentCard>
                <TitleContentCard>
                    {title}
                </TitleContentCard>

                <DescriptionContentCard>
                    {description}
                </DescriptionContentCard>
            </ContainerTextContentCard>
        </ContainerContentCard>
    )
}