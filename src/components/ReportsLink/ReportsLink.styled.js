import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
gap: 15px;
margin-bottom: 33px;
`;

const Text = styled.p`
color: var(--white-3, rgba(199, 204, 220, 0.50));
text-align: right;
font-size: 12px;
letter-spacing: 0.48px;
`;

export {Container, Text}