"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const mobile = useMediaQuery({ query: "(max-width:800px)" });

    useEffect(() => {
        mobile ? setIsMobile(mobile) : setIsMobile(false);
    }, [mobile]);

    return isMobile;
};

export default useIsMobile;
