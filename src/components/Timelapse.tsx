import Box from "@/UI/Box";
import layoutCss from "@/styles/layout.module.css";
import textCss from "@/styles/text.module.css";
import tlCss from "@/styles/Timelapse.module.css";
import Image from "next/image";
import tlImg from "@/../public/img/Graph.png";
import InputBox from "@/UI/InputBox";
import { Dispatch, useEffect, useState } from "react";
import TimelapseView from "./TimelapseView";
import Loading from "./Loading";

const Timelapse = () => {
    const [enteredTlWord, setEnteredTlWord] = useState("");
    const [keywords, setKeywords] = useState([""]);
    const [TlData, setTlData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const postToBackEnd = () => {
        console.log(enteredTlWord);
        fetch(
            `https://port-0-yozoom-be-5mk12alozx9jlq.sel5.cloudtype.app/call_datas_app/get-dl-trends/?keyword=${encodeURIComponent(
                enteredTlWord
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
                    throw new Error(`HTTP Error!: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setTlData(data);
                console.log(TlData);
                enteredTlWord.includes(",")
                    ? setKeywords(enteredTlWord.split(","))
                    : setKeywords([enteredTlWord]);
                setIsLoading(false);
            })
            .catch((e) => {
                console.error("An error occurred: ", e.message);
                alert("요청을 많습니다. 잠시후 다시 시도해주세요!");
            });
    };

    const changeTlWord = (e: any) => {
        setEnteredTlWord(e.target.value);
    };

    const submitHandler = (e: any) => {
        setIsLoading(true);
        e.preventDefault();
        setTlData([]);
        postToBackEnd();
    };

    useEffect(() => {
        console.log("Recived Data : ", TlData);
    }, [TlData]);

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
                            최대 3가지 관심 동향
                        </dd>
                    </div>
                </div>
                <InputBox>
                    <form className={tlCss.tlForm} onSubmit={submitHandler}>
                        <input
                            className={tlCss.tlInput}
                            onChange={changeTlWord}
                            placeholder="키워드를 입력하세요."
                        ></input>
                    </form>
                </InputBox>
            </div>
            {isLoading ? (
                <Loading />
            ) : TlData ? (
                <TimelapseView data={TlData} keywords={keywords} />
            ) : null}
        </Box>
    );
};

export default Timelapse;
