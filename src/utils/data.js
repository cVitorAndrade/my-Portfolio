import githubImage from "../assets/social-medias/github.png";
import gmailImage from "../assets/social-medias/gmail.png";
import linkedinImage from "../assets/social-medias/linkedin.png";

import gitImage from "../assets/skills/git.png";
import postgresqlImage from "../assets/skills/postgresql.png";
import javascriptImage from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import typescriptImage from "../assets/skills/typescript.png";
import knexImage from "../assets/skills/knex.svg";
import styledComponentsImage from "../assets/skills/styled-components.png";
import nodeImage from "../assets/skills/nodejs.svg";
import expressImage from "../assets/skills/express.png";

import adviceGenerator from "../assets/project-image/advice-generator-app.png"
import checkout from "../assets/project-image/Checkout.png"
import focusTimer from "../assets/project-image/focus-timer.png"
import formularioCriarEventos from "../assets/project-image/formulario-criar-eventos.png"
import githubFavorites from "../assets/project-image/github-favorites.png"
import guessingGame from "../assets/project-image/guessing-game.png"
import helpFlix from "../assets/project-image/help-flix.png"
import interactiveRating from "../assets/project-image/interactive-rating-component.png"
import interiorConsultant from "../assets/project-image/interiorConsultant.png"
import imcCalculator from "../assets/project-image/imc-calculator.png"
import laslesVPN from "../assets/project-image/laslesVPN.png"
import notFound from "../assets/project-image/404-not-found.png"
import priceTable from "../assets/project-image/price-table.png"
import projectDefaultImage from "../assets/project-image/project.png"
import recentWorks from "../assets/project-image/recent-works.png"
import startupWebsite from "../assets/project-image/startup-website.png"




export const socialMedias = [
    // {name: "linkedin", imageSrc: linkedinImage, id: 1, href:"https://github.com/cvitorandrade"},
    {name: "gmail", imageSrc: gmailImage, id: 2, href:"mailto:dev.cvitor@gmail.com"},
    {name: "github", imageSrc: githubImage , id: 3, href:"https://github.com/cvitorandrade"}
];

export const skills = [
    {name: "Javascript", id: 4, imageSrc: javascriptImage},
    {name: "Typescript", id: 5, imageSrc: typescriptImage},
    {name: "Express", id: 6, imageSrc: expressImage},
    {name: "React", id: 7, imageSrc: reactImage},
    {name: "Styled Components", id: 8, imageSrc: styledComponentsImage},
    {name: "Knex", id: 9, imageSrc: knexImage},
    {name: "Postgresql", id: 10, imageSrc: postgresqlImage},
    {name: "Git", id: 11, imageSrc: gitImage},
    {name: "NodeJs", id: 12, imageSrc: nodeImage},
];

export const projects = [
    {
        name: "Rocketnotes", id: 13,
        imageSrc: projectDefaultImage,
        description: `Meu projeto "Rocketnotes" oferece uma solução versátil para aqueles que desejam organizar suas ideias, links e informações importantes de forma eficaz. Com esta API, os usuários podem criar notas personalizadas, atribuir links relevantes e adicionar tags para categorização conveniente`,
        link: "",
        repository: "https://github.com/cVitorAndrade/rocktenotes",
        tags: [
            {name: "API", id: 47}, 
            {name: "NODE", id: 49},
            {name: "JS", id: 50},
            {name: "KNEX", id: 48},
        ]
    },
    {
        name: "Start Website", id: 16,
        imageSrc: startupWebsite,
        description: `Meu projeto, a "Startup Website", é uma vitrine digital projetada para uma startup fictícia que abraça a inovação e a visão do futuro. Esta página não apenas captura a essência da "Start," mas também oferece uma experiência de usuário fluida em todos os dispositivos, desde smartphones até desktops.`,
        link: "https://cvitorandrade-startup-website.vercel.app/",
        repository: "https://github.com/cVitorAndrade/startup-website",
        tags: [
            {name: "REACT", id: 45}, 
            {name: "JS", id: 47},
            {name: "STYLED-COMPONENTS", id: 46},
            {name: "HTML", id: 48},
            {name: "CSS", id: 49},
        ]
    },
    {
        name: "HelpFlix", id: 1,
        imageSrc: helpFlix,
        description: "Criei uma aplicação web emocionante que permite aos amantes de cinema descobrirem suas próximas aventuras cinematográficas com facilidade. Esta aplicação inovadora se integra à API The Movie DB para fornecer recomendações personalizadas de filmes com um simples toque de botão.",
        link: "https://cvitorandrade.github.io/helpflix/",
        repository: "https://github.com/cVitorAndrade/helpflix",
        tags: [
            {name: "HTML", id: 1}, 
            {name: "CSS", id: 2}, 
            {name: "JS", id: 3},
            {name: "API", id: 4}
        ]
    },
    {
        name: "GitHub Favorites", id: 2,
        imageSrc: githubFavorites,
        description: "Criei uma aplicação web dinâmica que permite aos usuários explorarem o vasto ecossistema de desenvolvedores e projetos hospedados no GitHub. Esta aplicação se baseia na poderosa API do GitHub e o Local Storage para construir uma tabela interativa de usuários pesquisados, fornecendo uma visão panorâmica de informações de usuários.",
        link: "https://cvitorandrade.github.io/github-favorites/",
        repository: "https://github.com/cVitorAndrade/github-favorites",
        tags: [
            {name: "HTML", id: 5}, 
            {name: "CSS", id: 6}, 
            {name: "JS", id: 7},
            {name: "API", id: 8}
        ]
    },
    {
        name: "Formulario criar eventos", id: 3,
        imageSrc: formularioCriarEventos,
        description: `Meu projeto, a "Página de Formulário de Criação de Eventos", é uma plataforma que simplifica o processo de planejamento e organização de eventos. Com este formulário, os organizadores podem facilmente fornecer informações cruciais para criar eventos memoráveis, desde conferências e festas até workshops e encontros.`,
        link: "https://full-stack-rocketseat.vercel.app/",
        repository: "https://github.com/cVitorAndrade/FullStack-rocketseat/tree/master/Formulario-Cria-Eventos",
        tags: [
            {name: "HTML", id: 9}, 
            {name: "CSS", id: 10}
        ]
    },
    {
        name: "LaslesVPN", id: 4,
        imageSrc: laslesVPN,
        description: `Minha criação, a "Landing Page LasleVPN," é um portal que abre as portas para um mundo de segurança e privacidade online. Desenvolvida especificamente para a empresa de fictícia VPN "LasleVPN", esta página oferece uma introdução envolvente aos serviços de VPN de alta qualidade da empresa.`,
        link: "https://lasles-vpn-landing-page-flame.vercel.app/",
        repository: "https://github.com/cVitorAndrade/laslesVPN-landing-page",
        tags: [
            {name: "HTML", id: 11}, 
            {name: "CSS", id: 12},
        ]
    },
    {
        name: "Focus Timer", id: 5,
        imageSrc: focusTimer,
        description: `Meu projeto "Focus Timer" é uma ferramenta eficaz de gerenciamento de tempo projetada para ajudar as pessoas a otimizarem sua produtividade e manterem o foco em suas tarefas importantes. Com essa aplicação, os usuários podem definir um temporizador personalizado e, ao final, recebem um sinal sonoro para indicar a conclusão da tarefa. Além disso, oferece a opção de ativar um som relaxante para criar um ambiente propício à concentração.`,
        link: "https://cvitorandrade.github.io/focus-timer/",
        repository: "https://github.com/cVitorAndrade/focus-timer",
        tags: [
            {name: "HTML", id: 13}, 
            {name: "CSS", id: 14}, 
            {name: "JS", id: 15}
        ]
    },
    {
        name: "Trabalhos Recentes", id: 6,
        imageSrc: recentWorks,
        description: `Meu projeto "Trabalhos Recentes" é uma demonstração de animações simples em experiências visuais cativantes. Esta iniciativa destaca projetos recentes de maneira memorável, aproveitando as animações para tornar cada detalhe mais envolvente.`,
        link: "https://full-stack-rocketseat-hdus.vercel.app/",
        repository: "https://github.com/cVitorAndrade/FullStack-rocketseat/tree/master/Site-trabalhos-recentes",
        tags: [
            {name: "HTML", id: 16}, 
            {name: "CSS", id: 17}
        ]
    },
    {
        name: "Price Table", id: 7,
        imageSrc: priceTable,
        description: `Meu projeto, "Price Table" parte do desafio "100 Days CSS Challenges", é uma exploração criativa que combina design elegante com interatividade envolvente. Consiste em três containers de ofertas, cada um oferecendo detalhes atraentes sobre produtos ou serviços. Ao passar o mouse sobre as ofertas, um elemento abaix é preenchido as barras de progresso para destacar os benefícios exclusivos de cada oferta.`,
        link: "https://price-table-orcin.vercel.app/",
        repository: "https://github.com/cVitorAndrade/price-table",
        tags: [
            {name: "HTML", id: 18}, 
            {name: "CSS", id: 19}, 
            {name: "JS", id: 20}
        ]
    },
    {
        name: "Interative Rating", id: 8,
        imageSrc: interactiveRating,
        description: `Meu projeto, um "Iteractive Rating", foi uma jornada emocionante proposta pelo Frontend Mentor. O objetivo era claro: criar um componente de classificação interativo que capturasse a essência do design proposto, buscando a máxima fidelidade possível.`,
        link: "https://interactive-rating-component-main-smoky.vercel.app/",
        repository: "https://github.com/cVitorAndrade/interactive-rating-component-main",
        tags: [
            {name: "HTML", id: 21}, 
            {name: "CSS", id: 22}, 
            {name: "JS", id: 23}
        ]
    },
    {
        name: "Advice Generator", id: 9,
        imageSrc: adviceGenerator,
        description: `Meu projeto, "Advice Generator", é uma aplicação simples e eficaz que permite aos usuários receberem conselhos valiosos com apenas um clique de botão. Através da integração com a Advice API, os usuários podem acessar uma vasta base de dados de conselhos e receber insights inspiradores e úteis em momentos de dúvida ou necessidade.`,
        link: "https://advice-generator-app-main-mu-ruby.vercel.app/",
        repository: "https://github.com/cVitorAndrade/advice-generator-app-main",
        tags: [
            {name: "HTML", id: 24}, 
            {name: "CSS", id: 25}, 
            {name: "JS", id: 26}, 
            {name: "API", id: 27}
        ]
    },
    {
        name: "Checkout Page", id: 10,
        imageSrc: checkout,
        description: `Meu projeto, a "Página de Checkout", é uma resposta ao desafio estimulante proposto pelo DevChallenges.io. O objetivo era claro: criar uma página de checkout que seguisse de perto o design fornecido, usando tipos corretos de campos de entrada e garantindo uma experiência de compra simplificada.`,
        link: "https://cvitor-checkout-page.netlify.app/",
        repository: "",
        tags: [
            {name: "HTML", id: 28}, 
            {name: "CSS", id: 29}, 
        ]
    },
    {
        name: "Calculadora de IMC", id: 11,
        imageSrc: imcCalculator,
        description: `Meu projeto, a "Calculadora de IMC", é uma ferramenta prática e acessível para ajudar as pessoas a avaliarem sua saúde com base no Índice de Massa Corporal. Com esta calculadora, os usuários podem inserir seu peso e altura e, em questão de segundos, obter uma estimativa do seu IMC, o que pode ser um indicador importante do estado de saúde.`,
        link: "https://calculadora-de-imc-amber.vercel.app/",
        repository: "https://github.com/cVitorAndrade/calculadora-de-imc",
        tags: [
            {name: "HTML", id: 30}, 
            {name: "CSS", id: 31}, 
            {name: "JS", id: 32}, 
        ]
    },
    {
        name: "Guessing Game", id: 12,
        imageSrc: guessingGame,
        description: `Meu projeto, o "Guessing GAme", é um jogo que permite aos jogadores adivinharem um número secreto dentro de um intervalo definido, ao mesmo tempo em que introduz um modal interativo ao acertar.`,
        link: "https://cvitorandrade.github.io/jogo-da-adivinhacao/",
        repository: "https://github.com/cVitorAndrade/jogo-da-adivinhacao",
        tags: [
            {name: "HTML", id: 33}, 
            {name: "CSS", id: 34},
            {name: "JS", id: 35},
        ]
    },
    {
        name: "404 Not Found", id: 13,
        imageSrc: notFound,
        description: `No projeto "404 Not Found", abracei o desafio proposto pelo devChallenges.io para criar uma página de erro 404 que aderisse ao design fornecido. Essa página não é apenas uma mensagem de erro, mas uma oportunidade para oferecer aos usuários uma experiência amigável e responsiva, independentemente do dispositivo que eles estejam usando.`,
        link: "https://cvitorandrade.github.io/404-not-found/",
        repository: "https://github.com/cVitorAndrade/404-not-found",
        tags: [
            {name: "HTML", id: 36},
            {name: "CSS", id: 37}
        ]
    },
    {
        name: "Interior Consultant", id: 14,
        imageSrc: interiorConsultant,
        description: `Meu projeto "Interior Consultant" é resultado de um empolgante desafio proposto pelo devChallenges.io. A tarefa era clara: criar uma página inicial que seguisse o design fornecido, priorizando a responsividade para atender a diferentes dispositivos e telas. Sem consultar a solução existente, dediquei-me a concretizar essa visão de design de forma autêntica.`,
        link: "https://cvitorandrade.github.io/Interior-Consultant/",
        repository: "https://github.com/cVitorAndrade/Interior-Consultant/tree/master",
        tags: [
            {name: "HTML", id: 38}, 
            {name: "CSS", id: 39}, 
            {name: "JS", id: 40}, 
        ]
    },
    {
        name: "library-manager-API", id: 15,
        imageSrc: projectDefaultImage,
        description: `Meu projeto "library-manager-API" é uma resposta ao desafiante problema proposto pela devChallenge. A missão era clara: criar uma API capaz de lidar com operações de criação, leitura, atualização e exclusão de informações sobre obras literárias.`,
        link: "",
        repository: "https://github.com/cVitorAndrade/library-manager-API",
        tags: [
            {name: "API", id: 41}, 
            {name: "NODE", id: 42},
            {name: "JS", id: 43},
            {name: "KNEX", id: 44},
        ]
    }
];