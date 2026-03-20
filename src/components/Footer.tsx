import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
        <p>© 2024 MMood. All rights reserved.</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
    width: 100%;
    background: #c0c0c0;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    text-align: center;
    border-top: 1px solid #e0e0e0;
`

export default Footer