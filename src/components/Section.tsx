"use client";
import { useEffect } from "react";
import { getDataToDj } from "@/hooks/GetDataTest";
import RelativeTopic from "./RelativeTopic";
import Timelapse from "./Timelapse";
import AiProccessing from "./AiProccessing";

const Section = () => {
    useEffect(() => {
        getDataToDj();
    }, []);

    return (
        <>
            <RelativeTopic />
            <Timelapse />
            <AiProccessing />
        </>
    );
};

export default Section;
