import Link from "next/link";
import React, { useState } from "react";
import { handleLoginValidation } from "../../util/validityMethods";
import {
  Input,
  Label,
  InputWrapper,
  Error,
  RegisterOrLoginWrapper,
  StyledLink,
  SubmitButton,
  SwitchRegisterOrLoginWrapper,
  Title,
  Wrapper,
  ImageWrap,
  StyledImage,
} from "../Register/styled";
import { ForgotPasswordLink } from "./styled";

const InitialErrors = {
  email: "",
  password: "",
};

const InitialFieldValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [errors, setErrors] = useState(InitialErrors);
  const [fields, setFields] = useState(InitialFieldValues);
  const [isShow, setShow] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const data = { ...fields };
    const errorData = { ...errors };
    data[event.target.name] = event.target.value;
    errorData[event.target.name] = "";
    setFields(data);
    setErrors(errorData);
  };

  const handleSubmit = () => {
    const errorData = handleLoginValidation(fields);
    if (Object.keys(errorData).length > 0) {
      setErrors(errorData);
    } else {
      console.log("All right now submit");
    }
  };

  return (
    <Wrapper>
      <RegisterOrLoginWrapper>
        <Title>Insta 2</Title>

        <InputWrapper>
          <Input
            placeholder="email"
            value={fields.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && <Error>{errors.email}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="password"
            type={!isShow ? "password" : "text"}
            value={fields.password}
            name="password"
            onChange={handleChange}
          />
          <ImageWrap
            onClick={() => {
              setShow(!isShow);
            }}
          >
            <StyledImage
              src={!isShow ? "/images/eye.svg" : "/images/eye-slash.svg"}
              alt=""
              layout="fixed"
              width={30}
              height={30}
              style={{}}
            />
          </ImageWrap>

          {errors.password && <Error>{errors.password}</Error>}
        </InputWrapper>
        <SubmitButton type="button" onClick={handleSubmit}>
          Log In
        </SubmitButton>
        <ForgotPasswordLink href="/forgot_password">
          {" "}
          Forgotten your password?
        </ForgotPasswordLink>
      </RegisterOrLoginWrapper>
      <SwitchRegisterOrLoginWrapper>
        <Label>
          Don&apos;t have an account?{" "}
          <Link href="/">
            <StyledLink>Sign Up </StyledLink>
          </Link>
        </Label>
      </SwitchRegisterOrLoginWrapper>
    </Wrapper>
  );
};

export default LoginPage;
