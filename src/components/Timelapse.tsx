import Box from "@/UI/Box";
import layoutCss from "@/styles/layout.module.css";
import textCss from "@/styles/text.module.css";
import tlCss from "@/styles/Timelapse.module.css";
import Image from "next/image";
import tlImg from "@/../public/img/Graph.png";
import InputBox from "@/UI/InputBox";

const Timelapse = () => {
    return (
        <Box>
            <div
                className={`${layoutCss.flexBox} ${tlCss.tlWrap}`}
                style={{ height: "100px" }}
            >
                <div className={tlCss.tlTitle}>
                    <Image
                        src={tlImg}
                        alt="logo"
                        width={60}
                        style={{ marginRight: "10px" }}
                    />
                    <div>
                        <dt
                            className={`${textCss.title} ${textCss.dt} ${layoutCss.dtLayout}`}
                        >
                            관심 동향
                        </dt>
                        <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                            최대 3가지 키워드 동향
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={tlCss.tlForm}>
                        <input
                            className={tlCss.tlInput}
                            placeholder="키워드를 입력하세요."
                        ></input>
                    </form>
                </InputBox>
            </div>
        </Box>
    );
};

export default Timelapse;
