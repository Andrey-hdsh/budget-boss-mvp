import { MainForm, StyledField, StyledLabel, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <MainForm autoComplete="off">
      <StyledLabel>
        Email
        <StyledField type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledField type="password" name="password" />
      </StyledLabel>
      <Btn type="submit">Log In</Btn>
    </MainForm>
  );
};
