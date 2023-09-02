import userImage from "../../assets/user.png"
import { socialMedias, skills, projects } from '../../utils/data';

import { Container, AboutMe, Profile } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Project } from '../../components/Project';
import { Tag } from '../../components/Tag';
import { Skill } from '../../components/Skill';
import { SocialMedia } from '../../components/SocialMedia';
import { Section } from '../../components/Section';


import { Swiper, SwiperSlide} from "swiper/react"

import { useState, useEffect } from "react";


export function Portfolio() {
    const [slidePerView, setSlidePerView] = useState(1)
    useEffect(() => {
        function handleResize() {
            if ( window.innerWidth < 738 ) {
                setSlidePerView(1)
            } else {
                setSlidePerView(2)
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
        
    }, [])

    let count = 1000

    return(
        <Container>
            <Header />
            <Profile>
            <img src={userImage} alt="" />
            <div>
                <p>Developer</p>
                <h1>Carlos Vitor</h1>
                <p>Sou um desenvolvedor fullstack apaixonado por criar soluções tecnológicas inovadoras. Minha missão é transformar ideias em realidade, entregando resultados excepcionais tanto no frontend quanto no backend. </p>
                <Button title="Contact me"/>
            </div>
            </Profile>

            <AboutMe>
            <h2>About me</h2>
            <div>
                <span></span>
                <p>Olá! Meu nome é Carlos Vitor. Sou um entusiasta da tecnologia apaixonado por desenvolvimento web. Atualmente, estudo na Universidade Federal do Ceará (UFC) enquanto navego pelo mundo emocionante da programação. Minha jornada começou com a curiosidade de entender como a tecnologia funciona e rapidamente me tornei um aficionado por criar soluções tanto no frontend quanto no backend. Minha busca incessante por aprendizado e minha dedicação ao aprimoramento constante são os pilares que sustentam minha jornada como programador. Estou animado para explorar novos desafios e transformar conceitos em realidade por meio do código. Vamos embarcar nessa jornada tecnológica juntos! </p>
            </div>
        </AboutMe>

            <Section title="Projects">
                <div>
                    <Swiper
                        slidesPerView={slidePerView}
                        navigation={{clickable: true}}
                        pagination={{clickable: true}}
                        spaceBetween={15}
                        loop={true}
                        centeredSlides={true}
                    >
                        {
                            projects.map( project => (
                                <SwiperSlide className="my-swiper-slide-container" key={count++}>
                                    <Project 
                                        key={project.id} 
                                        title={project.name} 
                                        description={project.description} 
                                        repositoryLink={project.repository}
                                        projectLink={project.link}
                                        src={project.imageSrc}>
                                        {
                                            project.tags.map( tag => (
                                                <Tag title={tag.name} key={tag.id}/>
                                            ))
                                        }
                                    </Project>
                                </SwiperSlide>
                            ))
                            
                        }
                    </Swiper>
                    <Button title="See all projects" href="https://github.com/cVitorAndrade?tab=repositories" target="_blank"/>
                </div>
            </Section>
            
            <Section title="Skills" className="skills-container" id='skills'>
                <div>
                    {
                        skills.map( skill => <Skill title={skill.name} key={skill.id} src={skill.imageSrc} />)
                    }
                </div>
            </Section>

            <footer>
                <div>
                    {
                        socialMedias.map( socialMedia => <SocialMedia key={socialMedia.id} src={socialMedia.imageSrc} title={socialMedia.name} href={socialMedia.href}/>)
                    }
                </div>
                <p>Developed by <a href="https://github.com/cvitorandrade"target="_blank" >cVitorAndrade</a></p>
            </footer>
        </Container>
    )
}