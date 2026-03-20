import styled from 'styled-components'
import links from '../utils/NavbarLInks' // Corrigido erro de digitação no nome do arquivo se houver
import logo from '../assets/logo.png' 

const Navbar = () => {
    return (
        <Wrapper>
            <NavContainer>
                <Logo href="/">
                    {/* Removi o filtro agressivo para testarmos a visibilidade original */}
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
    
    background: rgba(16, 42, 67, 0.6); /* Aumentei um pouco a opacidade para garantir contraste */
    backdrop-filter: blur(12px); 
    -webkit-backdrop-filter: blur(12px);
    
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const NavContainer = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
    height: 70px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.a`
    display: flex;
    align-items: center;
    
    img {
        height: 40px; /* Aumentei um pouco para facilitar o teste visual */
        width: auto;
        display: block; /* Garante que o elemento seja renderizado */
        transition: all 0.3s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }
`

const LinksContainer = styled.div`
    display: flex;
    gap: 2.5rem;
`

const NavLink = styled.a`
    color: #ffffff; 
    text-decoration: none;
    font-size: 0.8rem; 
    font-weight: 600;
    letter-spacing: 1.5px; 
    text-transform: uppercase;
    position: relative;
    transition: all 0.3s ease;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: #f59e0b; 
        transition: all 0.3s ease;
    }

    &:hover {
        color: #f59e0b;
    }

    &:hover::after {
        width: 100%;
    }
`

export default Navbar;