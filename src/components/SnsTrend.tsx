import Box from "@/UI/Box";
import layoutStyle from "./css_modules/layout.module.css";
import textStyle from "./css_modules/text.module.css";
import Image from "next/image";
import gIcon from "@/../public/img/gicon.png";

const SnsTrend = () => {
    return (
        <Box>
            <div
                className={`${layoutStyle.flexBox}`}
                style={{ height: "100px" }}
            >
                <div className="searchTxt">
                    <dt
                        className={`${textStyle.title} ${textStyle.dt} ${layoutStyle.dtLayout}`}
                    >
                        SNS 분석
                    </dt>
                    <dd className={`${textStyle.dd} ${layoutStyle.ddLayout}`}>
                        SNS 최신의 트렌드를 분석합니다.
                    </dd>
                </div>
                <Image src={gIcon} alt="logo" style={{ marginTop: "10px" }} />
            </div>
        </Box>
    );
};

export default SnsTrend;
