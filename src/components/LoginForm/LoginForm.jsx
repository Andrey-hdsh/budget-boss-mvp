import React from 'react';
import {
  FormWrapper,
  Form,
  Label,
  InputEmail,
  InputPassword,
  LogInBtn,
  RegisterBtn,
} from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <FormWrapper>
      <Form>
        <div>
          <Label>Email:</Label>

          <InputEmail type="email" placeholder="Email" />
        </div>
        <div>
          <Label>Password:</Label>

          <InputPassword type="password" placeholder="Password" />
        </div>
        <LogInBtn name="Log in" type="submit">
          Log in
        </LogInBtn>
        <RegisterBtn name="Registration" type="submit">
          Registration
        </RegisterBtn>
      </Form>
    </FormWrapper>
  );
};
