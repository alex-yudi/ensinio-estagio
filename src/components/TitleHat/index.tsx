import { TitleHatContainer } from './styles'

type TitleHatProps = {
    srcImg: string;
    alt: string;
    title: string;
    color: "fontLight" | "brandColorDark";
}

export function TitleHat({ srcImg, alt, title, color }: TitleHatProps) {
    return (
        <TitleHatContainer className={`${color}`}>
            <img src={srcImg} alt={alt} />
            {title}
        </TitleHatContainer>
    )
}