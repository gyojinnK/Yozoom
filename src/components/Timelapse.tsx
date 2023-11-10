import Box from "@/UI/Box";
import layoutCss from "@/styles/layout.module.css";
import textCss from "@/styles/text.module.css";
import tlCss from "@/styles/Timelapse.module.css";
import Image from "next/image";
import tlImg from "@/../public/img/Graph.png";
import InputBox from "@/UI/InputBox";
import { Dispatch, useState } from "react";

const Timelapse = () => {
    const [enteredTlWord, setEnteredTlWord] = useState("");
    const [TlData, setTlData] = useState();

    const postToBackEnd = () => {
        console.log(enteredTlWord);
        fetch(
            `http://localhost:8000/call_datas_app/get-go-trends/?keyword=${encodeURIComponent(
                enteredTlWord
            )}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setTlData(data));

        console.log(TlData);
    };

    const changeTlWord = (e: any) => {
        setEnteredTlWord(e.target.value);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        postToBackEnd();
    };

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
        </Box>
    );
};

export default Timelapse;
