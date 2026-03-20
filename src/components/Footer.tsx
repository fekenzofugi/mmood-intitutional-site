import styled from "styled-components";
import { FaInstagram, FaShoppingBag } from "react-icons/fa"; // npm install react-icons

const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        {/* Coluna 1: Marca e Distribuição */}
        <BrandSection>
          <Logo>MARKET<span>MOOD</span></Logo>
          <Description>
            Distribuidora oficial das melhores marcas. Qualidade, procedência e agilidade na sua compra online.
          </Description>
        </BrandSection>

        {/* Coluna 2: Redes e Canais */}
        <ActionSection>
          <h4>Conecte-se</h4>
          <div className="links-group">
            <a href="https://www.instagram.com/marketmood.br/" target="_blank" rel="noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.mercadolivre.com.br/pagina/marketmood?item_id=MLB4128716608&category_id=MLB270875&seller_id=625549907&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=eshop" target="_blank" rel="noreferrer">
              <FaShoppingBag /> Loja Oficial
            </a>
          </div>
        </ActionSection>

        {/* Coluna 3: Institucional Simples */}
        <LinksSection>
          <h4>Menu</h4>
          <a href="#sobre-nós">Sobre Nós</a>
          <a href="mailto:contato@marketmood.com.br">Fale Conosco</a>
        </LinksSection>
      </FooterContent>

      <CopyrightBar>
        <div className="container">
          <p>© {new Date().getFullYear()} MARKETMOOD. Todos os direitos reservados.</p>
          <p className="cnpj">CNPJ: 38.037.290/0001-10</p>
        </div>
      </CopyrightBar>
    </Wrapper>
  );
};

// --- ESTILOS ---

const Wrapper = styled.footer`
  width: 100%;
  background: var(--grey-50);
  color: var(--grey-800);
  padding: 5rem 2rem 2rem 2rem;
  border-top: 1px solid var(--grey-200);
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto 4rem auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--primary-500);
  margin: 0;
  span { color: var(--secondary-500); }
`;

const Description = styled.p`
  color: var(--grey-600);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 400px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const ActionSection = styled.div`
  h4 {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--primary-500);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .links-group {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--grey-700);
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);

    svg {
      font-size: 1.2rem;
      color: var(--secondary-500);
    }

    &:hover {
      color: var(--secondary-500);
      transform: translateX(5px);
    }

    @media (max-width: 992px) {
      justify-content: center;
    }
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h4 {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--primary-500);
    margin-bottom: 0.3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  a {
    font-size: 0.95rem;
    color: var(--grey-600);
    text-decoration: none;
    transition: var(--transition);
    &:hover {
      color: var(--primary-500);
      padding-left: 5px;
    }
  }
`;

const CopyrightBar = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--grey-200);
  text-align: center;
  
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    color: var(--grey-500);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  .cnpj {
    font-weight: 600;
    color: var(--grey-400);
    font-size: 0.75rem;
  }
`;

export default Footer;