import styled from 'styled-components';

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  gap: 24px;
`;
export const Btn = styled.button`
  margin-bottom: 20px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: block;
  min-width: 169px;
  height: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: white;
  background-color: #7c90f3;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledLabel = styled.label`
  font-size: 25px;
  font-weight: 500;
  text-transform: capitalize;
  text-shadow: 0 1px 1px #2d2020;
`;

export const StyledField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
