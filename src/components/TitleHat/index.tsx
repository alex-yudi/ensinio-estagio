import { TitleHatContainer } from './styles'

type TitleHatProps = {
    srcImg: string;
    alt: string;
    title: string;
    color: "fontLight" | "brandColorDark";
    opacity?: boolean;
}

export function TitleHat({ srcImg, alt, title, color, opacity }: TitleHatProps) {
    return (
        <TitleHatContainer className={`${color} ${opacity && "opacity"}`}>
            <img src={srcImg} alt={alt} />
            {title}
        </TitleHatContainer>
    )
}