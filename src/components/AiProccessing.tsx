import Box from "@/UI/Box";
import layoutCss from "@/styles/layout.module.css";
import textCss from "@/styles/text.module.css";
import aiCss from "@/styles/AiProccessing.module.css";
import Image from "next/image";
import aiImg from "@/../public/img/aiProcessing.png";
import InputBox from "@/UI/InputBox";
import { useEffect, useState } from "react";

const AiProccessing = () => {
    const [enteredRtWord, setEnteredRtWord] = useState("");
    const [pdData, setPdData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const postToBackEnd = () => {
        console.log(enteredRtWord);
        fetch(
            `https://port-0-yozoom-be-5mk12alozx9jlq.sel5.cloudtype.app/ai_analysis/get-predict-data/?keyword=${encodeURIComponent(
                enteredRtWord
            )}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setPdData(data);
                setIsLoading(false);
            });
    };

    const changePdWord = (e: any) => {
        setEnteredRtWord(e.target.value);
    };

    const submitHandler = (e: any) => {
        setIsLoading(true);
        e.preventDefault();
        postToBackEnd();
    };

    // test
    useEffect(() => {
        console.log(pdData);
    }, [pdData]);

    return (
        <Box>
            <div
                className={`${layoutCss.flexBox} ${aiCss.aiWrap}`}
                style={{ height: "100px" }}
            >
                <div className={aiCss.aiTiaie}>
                    <Image
                        src={aiImg}
                        alt="logo"
                        width={60}
                        style={{ marginRight: "10px" }}
                    />
                    <div>
                        <dt
                            className={`${textCss.title} ${textCss.dt} ${layoutCss.daiayout}`}
                        >
                            관심 예측
                        </dt>
                        <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                            키워드의 미래 관심도
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={aiCss.aiForm} onSubmit={submitHandler}>
                        <input
                            className={aiCss.aiInput}
                            placeholder="키워드를 입력하세요."
                            onChange={changePdWord}
                        ></input>
                    </form>
                </InputBox>
            </div>
        </Box>
    );
};

export default AiProccessing;
