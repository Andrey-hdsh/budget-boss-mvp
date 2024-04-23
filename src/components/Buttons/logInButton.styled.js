import styled from 'styled-components';

export const LogInBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 44px;
  padding: 0;
  background-color: var(--green-button);
  color: var(--white-color-third);
  border-radius: 16px;
  border: none;
  box-shadow: 1px 3px 5px 0px #60c47059;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  letter-spacing: 0.02em;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 136px;
  }
`;
