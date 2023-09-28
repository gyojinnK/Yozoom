"use client";
import { useEffect } from "react";
import Intro from "./Intro";
import Search from "./Search";
import SnsTrend from "./SnsTrend";
import { getDataToDj } from "@/hooks/GetDataTest";

const Section = () => {
    useEffect(() => {
        getDataToDj();
    }, []);

    return (
        <>
            <Intro />
            <Search />
            <SnsTrend />
        </>
    );
};

export default Section;
