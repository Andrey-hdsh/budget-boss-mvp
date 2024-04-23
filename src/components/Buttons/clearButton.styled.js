import styled from 'styled-components';

export const ClearBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 44px;
  padding: 0;
  background-color: var(--grey-color);
  color: var(--white-color-third);
  border-radius: 16px;
  border: 2px solid #474759;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  letter-spacing: 0.02em;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 125px;
  }

  @media screen and (min-width: 1280px) {
    width: 136px;
  }
`;
