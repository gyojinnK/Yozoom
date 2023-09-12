import Box from "@/UI/Box";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import "./Intro.css";

const Intro = () => {
    const isMobile = useIsMobile();

    return (
        <Box>
            <div
                className="intro_wrap"
                style={{
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                <div className="descriptionTxt">
                    <dt>요즘 트렌드를 Zoom!</dt>
                    <dd>
                        분석된 다양한 트렌드를 만나보세요. <br />
                        선두주자가 되는 길은 여기에 있습니다.
                    </dd>
                </div>
                <Image src={logo} alt="logo of service" width={300} />
            </div>
        </Box>
    );
};

export default Intro;
