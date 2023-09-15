import Box from "@/UI/Box";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import "./Intro.css";

const Intro = () => {
    const isMobile = useIsMobile();

    return (
        <Box height="190px">
            <div className="descriptionTxt">
                <dt
                    style={{
                        fontSize: isMobile ? "14px" : "24px",
                    }}
                >
                    요즘 트렌드를 Zoom!
                </dt>
                <dd>
                    분석된 다양한 트렌드를 만나보세요. <br />
                    선두주자가 되는 길은 여기에 있습니다.
                </dd>
            </div>
            <Image
                src={logo}
                alt="logo of service"
                width={300}
                style={{
                    width: isMobile ? "200px" : "300px",
                    height: isMobile ? "40px" : "58px",
                }}
            />
        </Box>
    );
};

export default Intro;
