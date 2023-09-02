import { Container, Link } from "./styles";
export function Project({ title, description, src, repositoryLink, projectLink, children, ...rest }) {
    return(
        <Container {...rest} id="projects">
            <img src={src} alt="" />
            <div>
                <h3>{title}</h3>
                <div>
                    {children}
                </div>
                <p>{description}</p>
                {repositoryLink && <Link href={repositoryLink} target="_blank" >Repósitorio do projeto</Link>}
                {projectLink && <Link href={projectLink} target="_blank" >Projeto funcionando</Link>}
            </div>
        </Container>
    )
}