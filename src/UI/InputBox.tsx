"use client";
import styled from "styled-components";

const StyledInputBox = styled.div`
    border-radius: 10px;
    background-color: var(--background-rgb);
    width: 200px;
    height: 60px;
    position: relative;
    overflow: hidden;
`;

const InputBox = ({ children }: any) => {
    return <StyledInputBox>{children}</StyledInputBox>;
};

export default InputBox;
