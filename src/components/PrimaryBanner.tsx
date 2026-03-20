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
        alt: 'MarketMood - Qualidade e Estilo',
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        alt: 'Nova Coleção MarketMood',
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
        alt: 'Experiência de Compra MarketMood',
    },
];

const PrimaryBanner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Wrapper>
            <ZoomContainer>
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

            <Content>
                <h1>Market Mood</h1>
                <div className="title-underline"></div>
                <p>Curadoria exclusiva e as melhores ofertas em nossa loja oficial no Mercado Livre.</p>
                
                {/* BOTÃO ATUALIZADO COM O LINK */}
                <a 
                    href="https://www.mercadolivre.com.br/pagina/marketmood?item_id=MLB4128716608&category_id=MLB270875&seller_id=625549907&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=eshop" 
                    className="btn"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Ver Loja Oficial
                </a>
            </Content>

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

const continuousZoom = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.1); }
`;

const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: #000;
`;

const ZoomContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${continuousZoom} 20s linear infinite alternate; 
`;

const SlidePane = styled.div<{ active: boolean }>`
    position: absolute;
    inset: 0;
    opacity: ${props => (props.active ? 1 : 0)};
    z-index: ${props => (props.active ? 1 : 0)};
    transition: opacity 1.5s ease-in-out;

    .overlay {
        position: absolute;
        inset: 0;
        z-index: 2;
        background-image: linear-gradient(
            rgba(16, 42, 67, 0.4), 
            rgba(16, 42, 67, 0.2)
        );
    }

    .carousel-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        letter-spacing: 4px;
        margin-bottom: 0.5rem;
        font-weight: 800;
    }

    .title-underline {
        margin: 0 auto 2.5rem;
        width: 80px;
        height: 6px;
        background: #f59e0b;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        color: #fff;
        max-width: 600px;
        margin: 0 auto 3rem;
        font-weight: 500;
        line-height: 1.6;
    }

    /* ESTILO DO LINK COM APARÊNCIA DE BOTÃO */
    .btn {
        display: inline-block;
        text-decoration: none;
        padding: 1.2rem 3.5rem;
        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        background: #f59e0b;
        color: #102a43;
        border-radius: 4px;
        transition: 0.3s ease;
        
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
    width: ${props => (props.active ? '35px' : '10px')};
    height: 10px;
    border-radius: 5px;
    border: none;
    background: ${props => (props.active ? '#f59e0b' : 'rgba(255,255,255,0.4)')};
    cursor: pointer;
    transition: all 0.4s ease;
`;

export default PrimaryBanner;