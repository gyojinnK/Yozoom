"use client";
import styled from "styled-components";

const StyledBox = styled.div`
    width: 100%;
    height: ${(props: any) => props.heights};
    background-color: var(--box-background-rgb);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.5) 0 5px 5px 0;
    margin: 0 0 20px 0;
`;

const Box = ({ children }: any) => {
    return <StyledBox>{children}</StyledBox>;
};

export default Box;
