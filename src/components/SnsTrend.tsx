import Box from "@/UI/Box";
import layoutCss from "@/styles/layout.module.css";
import textCss from "@/styles/text.module.css";
import Image from "next/image";
import gIcon from "@/../public/img/gicon.png";

const SnsTrend = () => {
    return (
        <Box>
            <div className={`${layoutCss.flexBox}`} style={{ height: "100px" }}>
                <div className="searchTxt">
                    <dt
                        className={`${textCss.title} ${textCss.dt} ${layoutCss.dtLayout}`}
                    >
                        SNS 분석
                    </dt>
                    <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                        SNS 최신의 트렌드를 분석합니다.
                    </dd>
                </div>
                <Image src={gIcon} alt="logo" style={{ marginTop: "10px" }} />
            </div>
        </Box>
    );
};

export default SnsTrend;
