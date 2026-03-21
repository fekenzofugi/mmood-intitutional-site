import { useState, useEffect } from 'react';
import styled from 'styled-components';
import links from '../utils/NavbarLInks';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Bloqueia o scroll do body quando o menu está aberto e limpa overflow
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

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
                <LogoSpan>MARKET<span>MOOD</span></LogoSpan>

                <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                    <div />
                    <div />
                    <div />
                </MenuButton>

                <LinksContainer isOpen={isOpen}>
                    {links.map((link, index) => (
                        <NavLink 
                            key={index} 
                            href={`#${link.text.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </LinksContainer>
            </NavContainer>
            
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
    background: rgba(16, 42, 67, 0.95); 
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    @media (min-width: 769px) {
        backdrop-filter: blur(12px); 
        -webkit-backdrop-filter: blur(12px);
    }
`;

const NavContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem; /* Reduzi um pouco para telas pequenas */
    height: 70px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const LogoSpan = styled.h2`
  font-size: 1.5rem; /* Reduzi levemente para mobile */
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff; /* Se suas variáveis não carregarem, deixei fallback */
  margin: 0;
  z-index: 1100;
  span { color: #f59e0b; }

  @media (min-width: 769px) {
    font-size: 1.8rem;
  }
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
    z-index: 1100;

    div {
        width: 30px;
        height: 3px;
        background: #f59e0b;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
        transform-origin: center;

        &:first-child {
            transform: ${({ isOpen }) => isOpen ? 'translateY(8px) rotate(45deg)' : 'translateY(0)'};
        }

        &:nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
            transform: ${({ isOpen }) => isOpen ? 'translateX(-10px)' : 'translateX(0)'};
        }

        &:last-child {
            transform: ${({ isOpen }) => isOpen ? 'translateY(-8px) rotate(-45deg)' : 'translateY(0)'};
        }
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

const LinksContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    gap: 2.5rem;
    z-index: 1050;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #102a43; /* Cor sólida para evitar vazamento visual */
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%; /* Ocupa a largura toda ou 280px */
        max-width: 300px;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
        box-shadow: -10px 0 30px rgba(0,0,0,0.3);
        visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'}; /* Evita foco em links invisíveis */
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
        font-size: 1.1rem;
        padding: 1.5rem;
    }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; /* Mudado de 100vw para 100% */
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 1020;
    transition: opacity 0.4s ease;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    pointer-events: ${({ isOpen }) => isOpen ? 'all' : 'none'};
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};

    @media (min-width: 769px) { display: none; }
`;

export default Navbar;