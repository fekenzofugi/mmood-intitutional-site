import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// 1. Definição dos Dados (Imagens do seu Carrossel)
interface SlideItem {
    id: number;
    image: string;
    alt: string;
}

const slidesData: SlideItem[] = [
    {
        id: 1,
        image: 'https://img.freepik.com/fotos-gratis/armazenamento-e-inventario-de-armazem_23-2152001549.jpg?semt=ais_hybrid&w=1600&q=80',
        alt: 'Logística Inteligente MarketMood',
    },
    {
        id: 2,
        image: "https://img.freepik.com/fotos-premium/estoque-de-mercadorias-de-armazem-de-grande-estoque-para-fundo-de-banner-de-remessa-logistica-criado-com-tecnologia-de-ia-generativa_965119-2291.jpg",
        alt: 'Gestão de Estoque Profissional',
    },
    {
        id: 3,
        image: "https://clearpromocoes.com.br/wp-content/uploads/2020/10/clear-promocoes-estoque-supermercado.jpg",
        alt: 'Infraestrutura de Armazenamento',
    },
];

const PrimaryBanner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Lógica para trocar o slide automaticamente a cada 7 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Wrapper>
            {/* NOVO CONTAINER: Aplica o zoom em tudo o que está dentro */}
            <ZoomContainer>
                {/* Camada de Imagens do Carrossel - Agora sem animação individual */}
                {slidesData.map((slide, index) => (
                    <SlidePane key={slide.id} active={index === currentSlide}>
                        <div className="overlay" />
                        <img 
                            src={slide.image} 
                            alt={slide.alt} 
                            className="carousel-image"
                        />
                    </SlidePane>
                ))}
            </ZoomContainer>

            {/* Conteúdo Fixo Central */}
            <Content>
                <h1>MarketMood</h1>
                <div className="title-underline"></div>
                <p>Soluções inteligentes para a gestão do seu inventário e logística de ponta a ponta.</p>
                <button className="btn">Conheça Nossos Produtos</button>
            </Content>

            {/* Indicadores de Navegação (Pills) */}
            <Pagination>
                {slidesData.map((_, index) => (
                    <Bullet 
                        key={index} 
                        active={index === currentSlide} 
                        onClick={() => setCurrentSlide(index)} 
                    />
                ))}
            </Pagination>
        </Wrapper>
    );
};

// --- ESTILOS ---

// Animação de Zoom Contínuo e Lento
const continuousZoom = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.15); } /* Aumentei um pouco a escala final */
`;

const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background: #000; /* Evita flash branco entre transições */
`;

const ZoomContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* Aplica a animação aqui, linear e infinita para suavidade máxima */
    animation: ${continuousZoom} 20s linear infinite alternate; 
    /* 'alternate' faz o zoom ir e voltar, evitando reset visual brusco no fim */
`;

const SlidePane = styled.div<{ active: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* O controle de visibilidade permanece aqui */
    opacity: ${props => (props.active ? 1 : 0)};
    z-index: ${props => (props.active ? 1 : 0)};
    transition: opacity 1.5s ease-in-out; /* Efeito Fade do D'Heaven */

    .overlay {
        position: absolute;
        inset: 0;
        z-index: 2;
        /* Overlay elegante e mais claro */
        background-image: linear-gradient(
            rgba(16, 42, 67, 0.45), 
            rgba(16, 42, 67, 0.25)
        );
    }

    /* Estilo da imagem dentro do pane, sem animação própria */
    .carousel-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-align: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 2rem;

    h1 {
        font-size: clamp(2.5rem, 8vw, 5rem);
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.6);
        margin-bottom: 0.5rem;
    }

    .title-underline {
        margin: 0 auto 2rem;
        width: 100px;
        height: 5px;
        background: #f59e0b;
        border-radius: 2px;
    }

    p {
        font-size: clamp(1.1rem, 2.5vw, 1.4rem);
        color: #fff;
        max-width: 750px;
        margin: 0 auto 3rem;
        font-weight: 500;
        line-height: 1.6;
        text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    }

    .btn {
        padding: 1.2rem 3rem;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        background: #f59e0b;
        color: #102a43;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            background: #fff;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
    }
`;

const Pagination = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 20;
`;

const Bullet = styled.button<{ active: boolean }>`
    width: ${props => (props.active ? '30px' : '10px')};
    height: 10px;
    border-radius: 5px;
    border: none;
    background: ${props => (props.active ? '#f59e0b' : 'rgba(255,255,255,0.5)')};
    cursor: pointer;
    transition: all 0.4s ease;
`;

export default PrimaryBanner;