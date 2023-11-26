import { useEffect, useState } from "react";
import tvCss from "@/styles/RelativeTopicView.module.css";
import Loading from "./Loading";

const RelativeTopicView = (props: any) => {
    const [topDatas, setTopDatas] = useState([{ title: "", type: "" }]);
    const [risingDatas, setRisingDatas] = useState([{ title: "", type: "" }]);

    const parsingDataHandler = () => {
        if (props.data != undefined) {
            const datas = props.data.keyword;
            let topTemp = [];
            let risingTemp = [];
            for (let i = 0; i < 5; i++) {
                topTemp.push({
                    title: datas.top[i]?.topic_title,
                    type: datas.top[i]?.topic_type,
                });
                risingTemp.push({
                    title: datas.rising[i]?.topic_title,
                    type: datas.rising[i]?.topic_type,
                });
            }
            setTopDatas(topTemp);
            setRisingDatas(risingTemp);

            console.log(topDatas);
            console.log(risingDatas);
        } else {
            console.log("Not yet...");
        }
    };

    useEffect(() => {
        parsingDataHandler();
    }, [props.data]);

    return (
        <div className={tvCss.wrap}>
            <div className={tvCss.subWrap}>
                <p>상위</p>
                <ul>
                    {topDatas.map((item: any) => {
                        return (
                            <li key={item.title}>
                                <span className={tvCss.type}>{item.type}</span>
                                <span className={tvCss.title}>
                                    {item.title}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={tvCss.subWrap}>
                <p>급등</p>
                <ul>
                    {risingDatas.map((item: any) => {
                        return (
                            <li key={item.title}>
                                <span className={tvCss.type}>{item.type}</span>
                                <span className={tvCss.title}>
                                    {item.title}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <style jsx>{`
                p {
                    margin: 0;
                    color: var(--background-rgb);
                    font-size: 1.5rem;
                    font-weight: 700;
                    padding: 10px 0 0 10px;
                }
                ul,
                li {
                    margin: 0;
                    padding: 0;
                }
                ul {
                    list-style: none;
                    text-align: center;
                    margin: 0 auto;
                }
                li {
                    width: 280px;
                    border-radius: 20px;
                    box-shadow: rgba(0, 0, 0, 0.5) 0 5px 5px 0;
                    margin: 10px auto;
                    background-color: var(--background-rgb);
                }
            `}</style>
        </div>
    );
};

export default RelativeTopicView;
