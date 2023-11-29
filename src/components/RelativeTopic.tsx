import Box from "@/UI/Box";
import Image from "next/image";
import textCss from "@/styles/text.module.css";
import layoutCss from "@/styles/layout.module.css";
import rtCss from "@/styles/RelativeTopic.module.css";
import InputBox from "@/UI/InputBox";
import relativeImg from "@/../public/img/relativeTopic.png";
import { useState } from "react";
import RelativeTopicView from "./RelativeTopicView";
import Loading from "../UI/Loading";

const RelativeTopic = () => {
    const [enteredRtWord, setEnteredRtWord] = useState("");
    const [rtData, setRtData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const postToBackEnd = () => {
        fetch(
            `https://port-0-yozoom-be-5mk12alozx9jlq.sel5.cloudtype.app/call_relative_topic/get-relative-topic/?keyword=${encodeURIComponent(
                enteredRtWord
            )}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("HTTP status " + res.status);
                }
                return res.json();
            })
            .then((data) => {
                setRtData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error: ", err);
                alert("요청을 처리하지 못했습니다. 잠시후 다시시도 해주세요!");
                setIsLoading(false);
            });
    };

    const changeRtWord = (e: any) => {
        setEnteredRtWord(e.target.value);
    };

    const submitHandler = (e: any) => {
        setIsLoading(true);
        e.preventDefault();
        postToBackEnd();
    };

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
                            관련 주제
                        </dt>
                        <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                            키워드 관련 주제들
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={rtCss.rtForm} onSubmit={submitHandler}>
                        {/* <p className={rtCss.rtP}>키워드를 입력하세요.</p> */}
                        <input
                            className={rtCss.rtInput}
                            onChange={changeRtWord}
                            placeholder="키워드를 입력하세요."
                        ></input>
                    </form>
                </InputBox>
            </div>
            {isLoading ? (
                <Loading />
            ) : rtData ? (
                <RelativeTopicView data={rtData} loading={isLoading} />
            ) : null}
        </Box>
    );
};

export default RelativeTopic;
