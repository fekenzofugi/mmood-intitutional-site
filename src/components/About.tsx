import styled from "styled-components"

const About = () => {
    return (
        <Wrapper>
            <h2>Sobre a MarketMood</h2>
        </Wrapper>  
    )
}

const Wrapper = styled.section`
    width: 100%;
    padding: 4rem 2rem;
    background: #f9f9f9;
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

export default About

