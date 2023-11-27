import { useEffect, useState } from "react";

const AiProccessingView = (props: { data: string[] }) => {
    return (
        <ul>
            {props.data?.map((item: any) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default AiProccessingView;
