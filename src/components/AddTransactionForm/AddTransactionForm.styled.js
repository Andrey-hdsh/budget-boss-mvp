import styled from "styled-components";

const Button = styled.button`
display: flex;
align-items: center;
gap: 8px;
background-color: inherit;
border: none;
margin: 0 auto 24px auto;
`;

const Text = styled.p`
color: var(--white-color-first);
text-align: center;
font-size: 12px;
font-weight: 700;
letter-spacing: 0.24px;
text-transform: uppercase;
`;

export {Button, Text}