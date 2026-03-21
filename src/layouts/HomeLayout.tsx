import styled from "styled-components"
import Navbar from "../components/Navbar"
import PrimaryBanner from "../components/PrimaryBanner"
import About from "../components/About"
import MarcasParceiras from "../components/MarcasParceiras"
import CanaisDeVenda from "../components/CanaisDeVenda"
import PerguntasFrequentes from "../components/PerguntasFrequentes"
import Whatsapp from "../components/Whatsapp"
import Footer from "../components/Footer"

const HomeLayout = () => {
  return (
    <Wrapper>
        <Navbar />
        <PrimaryBanner />
        <About />
        <MarcasParceiras />
        <CanaisDeVenda />
        <PerguntasFrequentes />
        <Whatsapp />
        <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default HomeLayout