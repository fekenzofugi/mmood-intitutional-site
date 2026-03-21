import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

const faqData: FAQItem[] = [
  {
    pergunta: "Como posso me tornar um parceiro oficial?",
    resposta: "Nossa parceria é estruturada para oferecer suporte completo. Entre em contato via formulário ou WhatsApp para que nosso time analise seu perfil comercial em até 48h."
  },
  {
    pergunta: "Quais os benefícios de trabalhar com nossas marcas?",
    resposta: "Oferecemos acesso a um catálogo exclusivo de marcas líderes, materiais de marketing PDV, treinamento de produto e condições comerciais diferenciadas."
  },
  {
    pergunta: "Existe um pedido mínimo inicial?",
    resposta: "Sim, os valores variam de acordo com a categoria e marca escolhida. Esse alinhamento é feito de forma personalizada durante a primeira reunião comercial."
  },
  {
    pergunta: "Como funciona a logística de entrega?",
    resposta: "Possuímos uma rede logística eficiente que atende todo o território nacional, com prazos otimizados e rastreamento em tempo real do seu pedido."
  }
];

const PerguntasFrequentes: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
      <header>
        <h2>Perguntas Frequentes</h2>
        <div className="underline"></div>
        <p>
          Tire suas dúvidas sobre nossos processos de parceria, prazos e como trabalhamos para oferecer a melhor experiência.
        </p>
      </header>

      <AccordionContainer>
        {faqData.map((item, index) => (
          <AccordionItem key={index} isOpen={activeIndex === index}>
            <AccordionHeader onClick={() => toggleAccordion(index)}>
              <span>{item.pergunta}</span>
              <div className="icon-wrapper">
                {activeIndex === index ? <Minus size={22} strokeWidth={3} /> : <Plus size={22} strokeWidth={3} />}
              </div>
            </AccordionHeader>
            <AccordionContent isOpen={activeIndex === index}>
              <div className="content-inner">
                {item.resposta}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </Section>
  );
};

// --- ESTILOS ALINHADOS AO COMPONENTE DE PARCEIROS ---

const Section = styled.section`
  padding: 8rem 0;
  background: #fff; /* Fundo branco igual ao PartnerTicker */
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
      color: #102a43; /* Azul escuro idêntico */
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1rem;
      font-weight: 800;
    }

    .underline {
      width: 80px;
      height: 6px;
      background: #f59e0b; /* Amarelo/Laranja idêntico */
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

const AccordionContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AccordionItem = styled.div<{ isOpen: boolean }>`
  background: #f0f4f8; /* Um cinza muito claro para destacar levemente do fundo branco */
  border-radius: 8px;
  border: 1px solid ${props => props.isOpen ? '#f59e0b' : '#e4e7eb'};
  transition: all 0.3s ease;

  &:hover {
    border-color: #f59e0b;
    transform: translateY(-2px);
  }
`;

const AccordionHeader = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    color: #102a43;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .icon-wrapper {
    color: #f59e0b; /* Ícone na cor do underline */
    display: flex;
    align-items: center;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${props => (props.isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  .content-inner {
    padding: 0 2rem 1.5rem 2rem;
    color: #486581;
    line-height: 1.7;
    font-size: 1.05rem;
    font-weight: 400;
  }
`;

export default PerguntasFrequentes;