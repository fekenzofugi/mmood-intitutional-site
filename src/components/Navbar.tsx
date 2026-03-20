import styled from 'styled-components'
import links from '../utils/NavbarLInks'
import logo from '../assets/logo.png' // Certifique-se de ter a logo na pasta assets    

const Navbar = () => {
    return (
        <Wrapper>
            <NavContainer>
                <Logo href="/">
                    {/* Mantive a logo, mas adicionei um filtro para garantir visibilidade */}
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
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1000;
    
    /* O SEGREDO: Fundo levemente escurecido (RGBA) + Blur forte */
    background: rgba(16, 42, 67, 0.4); /* Azul marinho da marca com 40% de opacidade */
    backdrop-filter: blur(12px); 
    -webkit-backdrop-filter: blur(12px);
    
    /* Borda sutil para separar do conteúdo */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
`

const NavContainer = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
    height: 70px; /* Altura slim sofisticada */
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.a`
    display: flex;
    align-items: center;
    img {
        height: 32px; 
        width: auto;
        filter: brightness(0) invert(1); /* Força a logo a ficar branca para contraste */
        transition: var(--transition);
    }
    &:hover img {
        transform: scale(1.05);
        opacity: 0.8;
    }
`

const LinksContainer = styled.div`
    display: flex;
    gap: 2.5rem;
`

const NavLink = styled.a`
    color: #ffffff; /* Texto sempre branco para o tema dark-glass */
    text-decoration: none;
    font-size: 0.8rem; 
    font-weight: 600;
    letter-spacing: 1.5px; 
    text-transform: uppercase;
    position: relative;
    transition: all 0.3s ease;

    /* Linha decorativa (Underline) */
    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--secondary-500, #f59e0b); 
        transition: all 0.3s ease;
    }

    &:hover {
        color: var(--secondary-500, #f59e0b);
    }

    &:hover::after {
        width: 100%;
    }
`

export default Navbar;