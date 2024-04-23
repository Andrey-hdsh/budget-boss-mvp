import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderComponent = styled.header`
  margin: 0 auto;
  padding: 12px 20px 12px 20px;
  background-color: var(--background-color);
  box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    padding: 8px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 8px 16px 8px 40px;
  }
`;

export const Wrapper = styled.div`
  max-width: 335px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  use {
    fill: white;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const ImgLogo = styled.img`
  width: 136px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 170px;
    height: 40px;
  }
`;

export const WrapperLogoUser = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 80px;
  text-align: center;
  align-items: center;

  p {
    font-size: 12px;
    color: rgba(199, 204, 220, 1);
  }

  @media screen and (min-width: 768px) {
    margin-left: 364px;
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 884px;
    gap: 12px;
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: rgba(86, 86, 107, 1);
`;

export const ExitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  background: transparent;
  border: none;
  padding: 0;
`;

export const TextExitButton = styled(Link)`
  color: var(--white-color-second);
  font-size: 12px;
  text-decoration: underline;
`;

export const DividingLine = styled.div`
  width: 1px;
  height: 36px;
  background-color: white;
  margin-right: 8px;
  margin-left: 8px;
  display: inline-block;
`;
