import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormWrapper,
  Form,
  Label,
  InputEmail,
  InputPassword,
  LogInBtn,
  RegisterBtn,
  RequiredP,
  Span,
} from './LoginForm.styled';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FormWrapper>
      <Form>
        <div>
          <InputEmail
            type="email"
            placeholder="Email"
            {...register('email', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 3, message: 'Minimum 3 characters' },
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && <RequiredP>{errors.email.message}</RequiredP>}
        </div>
        <div>
          <Label>{errors.password && <Span>*</Span>}Password:</Label>

          <InputPassword
            type="password"
            placeholder="Password"
            {...register('password', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 8, message: 'Minimum 8 characters' },
            })}
          />
          {errors.password && <RequiredP>{errors.password.message}</RequiredP>}
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
