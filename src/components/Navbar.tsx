import { useState, useEffect } from 'react';
import styled from 'styled-components';
import links from '../utils/NavbarLInks';
import logo from '../assets/logo2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Fecha o menu ao redimensionar a tela para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <Wrapper>
            <NavContainer>
                {/* <Logo href="/">
                    <img src={logo} alt="MarketMood Logo" />
                </Logo> */}
                <LogoSpan>MARKET<span>MOOD</span></LogoSpan>

                {/* Botão Hambúrguer - Mantém z-index alto */}
                <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                    <div />
                    <div />
                    <div />
                </MenuButton>

                {/* Container de Links (Desktop + Mobile) - z-index intermediário */}
                <LinksContainer isOpen={isOpen}>
                    {links.map((link, index) => (
                        <NavLink 
                            key={index} 
                            href={`#${link.text.toLowerCase()}`}
                            onClick={() => setIsOpen(false)} // Fecha ao clicar
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </LinksContainer>
            </NavContainer>
            
            {/* Overlay para fechar ao clicar fora - z-index baixo */}
            <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
        </Wrapper>
    );
};

// --- ESTILOS ---

const Wrapper = styled.nav`
    width: 100%;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(16, 42, 67, 0.9); /* Aumentei opacidade para fundo sólido */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    /* Blur apenas no desktop, para não conflitar com o menu mobile */
    @media (min-width: 769px) {
        backdrop-filter: blur(12px); 
        -webkit-backdrop-filter: blur(12px);
    }
`;

const NavContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 70px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative; /* Para garantir z-index correto dos filhos */
`;

const Logo = styled.a`
    z-index: 1100; /* Sempre visível e clicável */
    display: flex;
    align-items: center;
    
    img {
        height: 35px;
        transition: transform 0.3s ease;
    }
`;

const LogoSpan = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--secondary-100);
  margin: 0;
  span { color: var(--secondary-500); }
`;

const MenuButton = styled.button<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1100; /* Sempre visível e clicável */

    div {
        width: 30px;
        height: 3px;
        background: #f59e0b; /* Amarelo padrão */
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
        position: relative;
        transform-origin: center; /* Transforma a partir do centro */

        :first-child {
            transform: ${({ isOpen }) => isOpen ? 'translateY(11px) rotate(45deg)' : 'translateY(0) rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
            transform: ${({ isOpen }) => isOpen ? 'translateX(-20px)' : 'translateX(0)'};
        }

        :last-child {
            transform: ${({ isOpen }) => isOpen ? 'translateY(-11px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
        }
    }

    @media (min-width: 769px) {
        display: none; /* Esconde no desktop */
    }
`;

const LinksContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    gap: 2.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1050; /* Intermediário, acima do overlay, abaixo do botão/logo */

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(16, 42, 67, 0.95); /* Fundo mobile com blur */
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 280px;
        padding: 2rem;
        transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
        box-shadow: -10px 0 30px rgba(0,0,0,0.3);
    }
`;

const NavLink = styled.a`
    color: #ffffff; 
    text-decoration: none;
    font-size: 0.85rem; 
    font-weight: 700;
    letter-spacing: 1.5px; 
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
        color: #f59e0b;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 100%;
        text-align: center;
        padding: 1rem 0;
    }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 1020; /* Baixo, abaixo de tudo exceto o fundo do site */
    
    /* Transições suaves */
    transition: opacity 0.4s ease, visibility 0.4s ease;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};

    @media (min-width: 769px) { display: none; }
`;

export default Navbar;