import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa"; // npm install react-icons

const channel = {
  name: 'Mercado Livre',
  logo: 'https://framerusercontent.com/images/W5K7U0daQqj0XZYIucnF5tga84M.jpg?width=1080&height=1080',
  description: 'Principal marketplace da América Latina. Encontre nossa curadoria exclusiva em nossa loja oficial.',
};

const CanaisDeVenda: React.FC = () => {
  return (
    <Section>
      <header id='canais de venda'>
        <h5>Canais de Venda</h5>
        <h2>Onde Estamos</h2>
        <div className="title-underline"></div>
        <p>
          Além de nossa loja própria, estamos presentes nos maiores marketplaces do país.
        </p>
      </header>

      <CardsContainer>
        <SalesCard>
          <ImageContainer>
            <img src={channel.logo} alt={channel.name} />
          </ImageContainer>
          <Content>
            <h4>{channel.name}</h4>
            <p>{channel.description}</p>
            <ActionButton href="https://www.mercadolivre.com.br/pagina/marketmood?item_id=MLB4128716608&category_id=MLB270875&seller_id=625549907&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=eshop">
              Visitar Loja Oficial <FaArrowRight />
            </ActionButton>
          </Content>
        </SalesCard>
      </CardsContainer>
    </Section>
  );
};

// --- ESTILOS ---

const Section = styled.section`
  padding: 8rem 2rem;
  background: var(--background-secondary-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    text-align: center;
    max-width: 800px;
    margin-bottom: 5rem;

    h5 {
        color: var(--grey-500);
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 2.8rem;
      color: var(--primary-500);
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1rem;
      font-weight: 800;
    }

    .title-underline {
      width: 80px;
      height: 6px;
      background: var(--secondary-500);
      margin: 0 auto 2rem auto;
    }

    p {
      color: var(--grey-600);
      line-height: 1.6;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

const CardsContainer = styled.div`
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SalesCard = styled.div`
  background: #18181b; /* Cinza Grafite Premium (semelhante à imagem mas para root) */
  border-radius: 12px; /* Bordas arredondadas suaves */
  width: 380px; /* Largura ideal para um cartão de destaque */
  overflow: hidden; /* Garante que a imagem e conteúdo não vazem */
  transition: var(--transition);
  box-shadow: var(--shadow-3);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-4);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px; /* Altura para a imagem quadrada */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Preenche o espaço mantendo a proporção */
    transition: all 0.5s ease-in-out;
    filter: grayscale(0%);
    opacity: 1;
  }

  ${SalesCard}:hover & img {
    /* Fica preto e branco no hover (mantive sua regra) */
    filter: grayscale(100%);
    opacity: 0.7;
    transform: scale(1.05); /* Leve zoom in */
  }
`;

const Content = styled.div`
  padding: 2.5rem 2rem 2rem 2rem;
  color: var(--grey-300);

  h4 {
    font-size: 1.6rem;
    color: var(--white);
    font-weight: 700;
    margin-bottom: 0.75rem;
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  p {
    font-size: 0.95rem;
    color: var(--grey-400);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-weight: 400;
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--secondary-500); /* Amarelo Accent */
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: var(--transition);
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;

  svg {
    transition: var(--transition);
  }

  &:hover {
    color: var(--white);
    border-color: var(--secondary-500);
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

export default CanaisDeVenda;