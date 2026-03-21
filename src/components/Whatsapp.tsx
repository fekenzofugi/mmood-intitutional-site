import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"

const Whatsapp = () => {
    return (
        <Wrapper href="https://wa.me/5511941824823?text=Bem%20vindo%20a%Market%20Mood" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
        </Wrapper>
    )
}

const Wrapper = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25D366; /* Cor verde do WhatsApp */
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
`

export default Whatsapp