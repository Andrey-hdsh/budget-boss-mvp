import styled from 'styled-components';

export const RegistrationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 44px;
  padding: 0;
  background-color: var(--white-button);
  color: var(--background-color);
  border-radius: 16px;
  border: none;
  box-shadow: 0px 4px 7px 0px #00000040;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  letter-spacing: 0.02em;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 136px;
  }
`;
