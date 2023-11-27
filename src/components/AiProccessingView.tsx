import { useEffect, useState } from "react";

const AiProccessingView = (props: { data: string[] }) => {
    return (
        <ul>
            {props.data?.map((item: any) => (
                <li>{item}</li>
            ))}
        </ul>
    );
};

export default AiProccessingView;
