"use client";
import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
    width: 100%;
    height: 190px;
    background-color: var(--box-background-rgb);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.5) 0 5px 5px 0;
    margin: 0;
`;

const Box = ({ children }: any) => {
    return <StyledBox>{children}</StyledBox>;
};

export default Box;
