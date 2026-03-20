import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: 'Joma', logo: 'https://images.seeklogo.com/logo-png/35/2/joma-logo-png_seeklogo-350643.png'},
  { name: 'New Balance', logo: 'https://images.seeklogo.com/logo-png/9/2/new-balance-logo-png_seeklogo-98723.png'},
  { name: 'Umbro', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Umbro_logo_%28current%29.svg'},
  { name: 'Dac', logo: 'https://dac.com.br/wp-content/uploads/2021/01/cropped-Logo-DAC_Sem-Circulo.png'},
  { name: 'ACP', logo: 'https://static.wixstatic.com/media/d06998_f68892c9671f4f83b5eb6520151c025e~mv2.png/v1/fill/w_187,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-ACP.png'},
  { name: 'Dass', logo: 'https://sportsjob.com.br/wp-content/uploads/wp-jobhunt-users/grupo-dass.png'},
  { name: 'Leonora', logo: 'https://www.grupoleonora.com.br/wp-content/uploads/2025/08/logo-leonora.png'},
];

const PartnerTicker: React.FC = () => {
  // Duplicamos apenas o necessário para o loop
  const infinitePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <Section>
      <header>
        <h2>Marcas Parceiras</h2>
        <div className="underline"></div>
        <p>
          Trabalhamos com marcas líderes em seus segmentos, oferecendo produtos de qualidade e design superior.
        </p>
      </header>

      <TickerWrapper>
        <TickerTrack>
          {infinitePartners.map((partner, index) => (
            <LogoCard key={index}>
              <img src={partner.logo} alt={partner.name} title={partner.name} />
            </LogoCard>
          ))}
        </TickerTrack>
      </TickerWrapper>
    </Section>
  );
};

// --- ESTILOS ---

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Ajustado para o loop correto */
`;

const Section = styled.section`
  padding: 8rem 0;
  background: #fff;
  /* Garante que nada saia dos limites da tela nesta seção */
  width: 100%;
  max-width: 100vw; 
  overflow: hidden; 

  header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 5rem auto;
    padding: 0 2rem;

    h2 {
      font-size: 2.8rem;
      color: #102a43;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1rem;
      font-weight: 800;
    }

    .underline {
      width: 80px;
      height: 6px;
      background: #f59e0b;
      margin: 0 auto 2rem auto;
    }

    p {
      color: #334e68;
      line-height: 1.6;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

const TickerWrapper = styled.div`
  width: 100%;
  overflow: hidden; /* Segunda camada de segurança contra overflow */
  position: relative;
  
  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 15%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }
`;

const TickerTrack = styled.div`
  display: flex;
  width: max-content; /* Usa o tamanho real dos itens sem quebrar linha */
  align-items: center;
  animation: ${scroll} 40s linear infinite; /* Aumentei o tempo para ficar mais suave */

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoCard = styled.div`
  width: 280px; 
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  img {
    width: 160px;
    height: 80px;
    object-fit: contain;
    filter: grayscale(100%) brightness(0.6); 
    opacity: 0.8;
    transition: all 0.4s ease-in-out;

    &:hover {
      filter: grayscale(0%) brightness(1);
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;

export default PartnerTicker;