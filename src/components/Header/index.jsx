import { Container } from "./styles";
import { Button } from '../Button'
export function Header() {
    return(
        <Container>
            <a href="#home">Home</a>
            <div>
                <a href="#projects">Projects</a>
                <Button title="Contact" href="#skills"/>
            </div>
        </Container>
    )
}