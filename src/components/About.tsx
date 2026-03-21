import styled from 'styled-components';

const About = () => {
    return (
        <Wrapper>
            <div id="sobre nós" className="container">
                <div className="content-grid">
                    {/* Texto Primeiro no Mobile */}
                    <div className="text-content">
                        <h2>Conheça a MarketMood</h2>
                        <div className="underline"></div>
                        <p>
                            A <strong>MarketMood</strong> é uma distribuidora com uma ampla variedade de produtos, 
                            conectando grandes marcas ao consumidor final com eficiência e agilidade pelo Mercado Livre.
                        </p>
                        <p>
                            Somos parceiros oficiais de marcas líderes como <strong>Dac, ACP, Grupo Dass (New Balance, Fila, Umbro) e Grupo Vulcabras</strong>. 
                            Nosso catálogo abrange desde alta performance em <strong>artigos esportivos</strong> até a funcionalidade completa de <strong>materiais escolares e de escritório</strong>.
                        </p>
                        <p className="highlight">
                            Variedade multicanal com a garantia de procedência das maiores fabricantes do mercado.
                        </p>
                    </div>

                    {/* Imagem embaixo no Mobile */}
                    <div className="image-container">
                        <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                            alt="Distribuição MarketMood" 
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 6rem 2rem;
    background: var(--background-secondary-color);
    width: 100%;
    overflow: hidden; /* CRITICO: Impede que qualquer resíduo de sombra ou gap vaze para a lateral */

    .container {
        max-width: var(--max-width);
        margin: 0 auto;
        width: 100%;
    }

    .content-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;

        @media (max-width: 992px) {
            grid-template-columns: 1fr;
            gap: 3rem;
            /* Inverte a ordem visual: Texto (1) e Imagem (2) */
            & > div:nth-child(1) { order: 1; }
            & > div:nth-child(2) { order: 2; }
            text-align: center;
        }
    }

    .image-container {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            max-width: 550px; /* Limita o tamanho para não estourar */
            height: auto;
            min-height: 300px;
            max-height: 450px;
            object-fit: cover;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-3);
        }
    }

    .text-content {
        display: flex;
        flex-direction: column;

        @media (max-width: 992px) {
            align-items: center; /* Centraliza a underline e o highlight no mobile */
        }

        h2 {
            /* clamp garante que o título não fique gigante no mobile */
            font-size: clamp(1.8rem, 5vw, 2.8rem);
            color: var(--primary-500);
            margin-bottom: 1rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .underline {
            width: 80px;
            height: 6px;
            background: var(--secondary-500);
            margin-bottom: 2rem;
        }

        p {
            font-size: clamp(1rem, 3vw, 1.2rem);
            color: var(--grey-700);
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .highlight {
            font-weight: 700;
            color: var(--primary-500);
            border-left: 6px solid var(--secondary-500);
            padding-left: 1.5rem;
            font-size: 1.1rem;
            text-align: left; /* Mantém o texto alinhado à borda lateral esquerda */
        }
    }

    /* Ajuste fino para celulares pequenos */
    @media (max-width: 600px) {
        padding: 4rem 1rem;
        
        .content-grid {
            gap: 2.5rem;
        }
    }
`;

export default About;