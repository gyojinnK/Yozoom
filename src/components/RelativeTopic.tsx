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
            <div className={`${layoutCss.flexBox}`} style={{ height: "100px" }}>
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
                            키워드에 관련된 주제들을 알려드릴게요,
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={rtCss.rtForm}>
                        <p className={rtCss.rtP}>키워드를 입력하세요.</p>
                        <input
                            className={rtCss.rtInput}
                            placeholder="ex) 손흥민"
                        ></input>
                    </form>
                </InputBox>
            </div>
        </Box>
    );
};

export default RelativeTopic;
