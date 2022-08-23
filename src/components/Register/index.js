import Link from "next/link";
import React, { useState } from "react";
import { handleRegisterValidation } from "../../util/validityMethods";
import {
  Error,
  ImageWrap,
  Input,
  InputWrapper,
  Label,
  RegisterOrLoginWrapper,
  StyledImage,
  StyledLink,
  SubmitButton,
  SwitchRegisterOrLoginWrapper,
  Title,
  Wrapper,
} from "./styled";

const InitialErrors = {
  email: "",
  fullName: "",
  userName: "",
  password: "",
};

const InitialFieldValues = {
  email: "",
  fullName: "",
  userName: "",
  password: "",
};

const RegisterPage = () => {
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
    const errorData = handleRegisterValidation(fields);
    if (Object.keys(errorData).length > 0) {
      setErrors(errorData);
    } else {
      console.log("All right now submit");
    }
  };

  return (
    <React.Fragment>
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
              placeholder="full name"
              value={fields.fullName}
              name="fullName"
              onChange={handleChange}
            />
            {errors.fullName && <Error>{errors.fullName}</Error>}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="user name"
              value={fields.userName}
              name="userName"
              onChange={handleChange}
            />
            {errors.userName && <Error>{errors.userName}</Error>}
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
            {" "}
            Submit{" "}
          </SubmitButton>
        </RegisterOrLoginWrapper>
        <SwitchRegisterOrLoginWrapper>
          <Label>
            Have an account?{" "}
            <Link href="/login">
              <StyledLink>Log in </StyledLink>
            </Link>
          </Label>
        </SwitchRegisterOrLoginWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default RegisterPage;
