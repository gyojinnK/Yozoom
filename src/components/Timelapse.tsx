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
            <div className={`${layoutCss.flexBox}`} style={{ height: "100px" }}>
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
                            관심도 동향
                        </dt>
                        <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                            과거부터 현재까지, 그래프로 확인하세요.
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={tlCss.tlForm}>
                        <p className={tlCss.tlP}>
                            키워드를 입력하세요. (최대 3가지)
                        </p>
                        <input
                            className={tlCss.tlInput}
                            placeholder="ex) BTS, 박재범, 강교진"
                        ></input>
                    </form>
                </InputBox>
            </div>
        </Box>
    );
};

export default Timelapse;
