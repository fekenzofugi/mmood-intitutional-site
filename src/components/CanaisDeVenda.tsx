import styled from "styled-components";

const CanaisDeVenda = () => {
    return (
        <Wrapper>
            <h2>Canais de Venda</h2>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    padding: 4rem 2rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
    }

    p {
        font-size: 1.125rem;
        max-width: 600px;
        color: #555;
        line-height: 1.6;
    }
`


export default CanaisDeVenda