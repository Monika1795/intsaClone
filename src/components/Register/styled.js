import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 35%;
  top: 10%;
  width: 30%;
  justify-content: center;
  flex-grow: 1;
  padding: 10px;
`;

export const RegisterOrLoginWrapper = styled.div`
  width: 100%;
  border: 1px solid #d7d7d3;
  box-shadow: 2px 2px rgb(221, 218, 218);
  padding: 15px;
`;

export const Title = styled.h1`
  text-align: center;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 20px;
  font-size: 16px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Error = styled.span`
  font-size: 16px;
  color: red;
`;

export const SubmitButton = styled.button`
  color: #fff;
  background-color: #0095f6;
  width: 100%;
  height: 50px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 24px;
`;
export const SwitchRegisterOrLoginWrapper = styled.div`
  margin-top: 50px;
  padding: 15px;
  left: 25%;
  width: 100%;
  border: 1px solid #d7d7d3;
`;

export const Label = styled.p`
  text-align: center;
  font-size: 18px;
`;
export const StyledLink = styled.a`
  color: blue;
  cursor: pointer;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 10%;
  top: -38px;
  left: 274px;
`;
export const StyledImage = styled(Image)``;
