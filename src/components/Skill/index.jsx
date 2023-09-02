import { Container } from "./styles";
export function Skill({ src, title, ...rest }) {
    return(
        <Container {...rest}>
            <img src={src} alt="" />
            <p>{title}</p>
        </Container>
    )
}