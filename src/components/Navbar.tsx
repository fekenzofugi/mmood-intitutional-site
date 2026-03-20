import styled from 'styled-components'
import links from '../utils/NavbarLInks'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <Wrapper>
            <NavContainer>
                <Logo href="/">
                    <img src={logo} alt="MarketMood Logo" />
                </Logo>
                <LinksContainer>
                    {links.map((link, index) => (
                        <NavLink key={index} href={`#${link.text.toLowerCase()}`}>
                            {link.text}
                        </NavLink>
                    ))}
                </LinksContainer>
            </NavContainer>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    width: 100%;
    background: rgba(255, 255, 255, 0.5); 
    backdrop-filrgba(4, 1, 1, 0.4)gredo da transparência elegante */
    -webkit-backdrop-filter: blur(10px);
    
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    position: fixed; /* Fixed costuma funcionar melhor para transparências sobre o banner */
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

const NavContainer = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
    /* Altura reduzida para 70px ou menos para ser mais "slim" */
    height: 70px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.a`
    display: flex;
    align-items: center;
    img {
        height: 35px; /* Reduzido para acompanhar a navbar slim */
        width: auto;
        transition: var(--transition);
        filter: brightness(1.1);
    }
    &:hover img {
        transform: scale(1.02);
    }
`

const LinksContainer = styled.div`
    display: flex;
    gap: 2.5rem;
    height: 100%;
`

const NavLink = styled.a`
    color: #f5f5f5; /* Azul marinho profundo */
    text-decoration: none;
    font-weight: 500;
    font-size: 0.85rem; /* Menor para parecer mais sofisticado */
    letter-spacing: 1px; /* Espaçamento entre letras estilo luxo */
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 500;
    transition: all 0.3s ease;
    text-transform: uppercase; /* Links em caixa alta passam mais seriedade */

    &::after {
        content: '';
        position: absolute;
        bottom: 20px; /* Ajustado para a nova altura */
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 1.5px;
        background: var(--secondary-500, #f59e0b); 
        transition: all 0.3s ease;
    }

    &:hover {
        color: var(--secondary-500, #f59e0b);
        opacity: 0.8;
    }

    &:hover::after {
        width: 100%;
    }
`

export default Navbar