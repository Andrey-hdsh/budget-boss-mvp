import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  color: var(--white-color-second);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.24px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 140px;
  background-color: inherit;
  border-radius: 22px 0px 0px 22px;
  border: 2px solid var(--grey-border-color);
  color: var(--white-color-first);
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  padding: 12px 16px;
`;

const Button = styled.button`
  width: 142px;
  height: 44px;
  background-color: inherit;
  flex-shrink: 0;
  border-radius: 0px 22px 22px 0px;
  border: 2px solid var(--grey-border-color);
  color: var(--white-color-second);
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  padding: 12px 20px;
`;

export { Container, Text, Input, Button };
