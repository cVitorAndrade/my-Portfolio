import { Container } from "./styles";
export function SocialMedia({ title, src, ...rest}) {
    return(
        <Container target="_blank" {...rest}>
            <img src={src} alt="" />
            <p>{title}</p>
        </Container>
    )
}