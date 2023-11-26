import ImagemLogo from '../assets/logo.webp'
import ImageCarousel1 from '../assets/imagem1.avif';
import ImageCarousel2 from '../assets/imagem2.jpg';
import ImageCarousel3 from '../assets/imagem3.avif';
import ImageCarousel4 from '../assets/imagem4.jpg';
import ImageCarousel5 from '../assets/imagem5.jpg';
import ImgSelo from '../assets/selo.webp';

// HEADER (NAVBAR)
export const headerTexts = {
    logo: { src: ImagemLogo, alt: 'Logo' }, //LOGO NAVBAR
    
    link1: { text: 'Home', path: 'LinkAqui' },
    link2: { text: 'Twitter', path: 'LinkAqui' },
    link3: { text: 'Instagram', path: 'LinkAqui' },
    link4: { text: 'Whatsapp', path: 'LinkAqui' }
}

//SECTION 2
export const leftColumn = {
    p1: { text: 'Quem somos nós?' },
    p2: { text: 'Somos uma academia dedicada ao bem-estar e condicionamento físico.' },
}

export const rightColumn = {
    p1: { text: 'Texto com muita felicidade e carinho da parte da direita esperando atualização.' },
    link1: { text: 'Visite o Link', path: 'LinkAqui' },
}

// WELCOME
export const welcomeTexts = {
    p1: { text: 'Desbravando o Universo da Musculação' },
    p2: { text: 'No reino da busca incessante pela força e estética, a musculação emerge como uma disciplina que vai muito além de levantar pesos. É um compromisso diário com a superação pessoal, um elo entre mente e corpo que se fortalece a cada repetição.' },
    
    selo: { src: ImgSelo, alt: 'Selo'}, // SELO CONTEUDO DIREITA

    p3: { text: 'Conteúdo à Direita 1' },
    p4: { text: 'Descrição do Conteúdo à Direita 1.' },
    p5: { text: 'Conteúdo à Direita 2' },
    p6: { text: 'Descrição do Conteúdo à Direita 2.' },

    link1: { text: 'Descubra Mais', path: 'LinkAqui' },
}

//CAROUSEL IMAGENS
export const carouselImg = {
    img1: { src: ImageCarousel1},
    img2: { src: ImageCarousel2},
    img3: { src: ImageCarousel3},
    img4: { src: ImageCarousel4},
    img5: { src: ImageCarousel5},
}