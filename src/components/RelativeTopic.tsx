import Box from "@/UI/Box";
import Image from "next/image";
import textCss from "@/styles/text.module.css";
import layoutCss from "@/styles/layout.module.css";
import rtCss from "@/styles/RelativeTopic.module.css";
import InputBox from "@/UI/InputBox";
import relativeImg from "@/../public/img/relativeTopic.png";

const RelativeTopic = () => {
    return (
        <Box>
            <div
                className={`${layoutCss.flexBox} ${rtCss.rtWrap}`}
                style={{ height: "100px" }}
            >
                <div className={rtCss.rtTitle}>
                    <Image
                        src={relativeImg}
                        alt="logo"
                        width={60}
                        style={{ marginRight: "10px" }}
                    />
                    <div>
                        <dt
                            className={`${textCss.title} ${textCss.dt} ${layoutCss.dtLayout}`}
                        >
                            관련 주재
                        </dt>
                        <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                            키워드 관련 주제들
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={rtCss.rtForm}>
                        {/* <p className={rtCss.rtP}>키워드를 입력하세요.</p> */}
                        <input
                            className={rtCss.rtInput}
                            placeholder="키워드를 입력하세요."
                        ></input>
                    </form>
                </InputBox>
            </div>
        </Box>
    );
};

export default RelativeTopic;
