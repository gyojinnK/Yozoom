import { useEffect, useState } from "react";

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
        <div
            style={{
                display: "flex",
                margin: "0 auto",
                width: "90%",
                justifyContent: "space-evenly",
            }}
        >
            <div>
                [top]
                {topDatas.map((item: any) => {
                    return (
                        <li key={item.title}>
                            {item.type} {">"} {item.title}
                        </li>
                    );
                })}
            </div>
            <div>
                [rising]
                {risingDatas.map((item: any) => {
                    return (
                        <li key={item.title}>
                            {item.type} {">"} {item.title}
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default RelativeTopicView;
