import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 10%;
  text-align: center;
  font-size: 80px;
`;
const Label = styled.h3`
  text-align: center;
  font-size: 30px;
`;
const Button = styled.button`
  color: #fff;
  background-color: blue;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
`;
const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <Title>Whoops !!</Title>
        <Label> 404 Page not found</Label>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          Go back
        </Button>
      </Wrapper>
    </>
  );
};

export default NotFound;
