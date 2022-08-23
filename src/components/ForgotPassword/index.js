import Link from "next/link";
import React from "react";
import {
  Input,
  InputWrapper,
  Label,
  StyledLink,
  SubmitButton,
  SwitchRegisterOrLoginWrapper,
  Title,
} from "../Register/styled";
import { HelpText, Wrapper } from "./styled";

const ForgotPasswordPage = () => {
  const handleChange = () => {};

  return (
    <Wrapper>
      <Title>Forgot your Password?</Title>
      <HelpText>
        Enter your email address, and we&apos;ll send you a link to get back
        into your account.
      </HelpText>
      <InputWrapper>
        <Input placeholder="email" name="password" onChange={handleChange} />
      </InputWrapper>
      <SubmitButton>Send Link</SubmitButton>
      <SwitchRegisterOrLoginWrapper>
        <Label>
          Back To{" "}
          <Link href="/login">
            <StyledLink>Log in </StyledLink>
          </Link>
        </Label>
      </SwitchRegisterOrLoginWrapper>
    </Wrapper>
  );
};

export default ForgotPasswordPage;
