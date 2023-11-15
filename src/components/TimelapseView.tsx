import { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

const TimelapseView = (props: { data: any; keywords: any }) => {
    const data = props.data;
    //const keywords = props.keywords;
    const [formattedData, setFormattedData] = useState([
        { id: "", data: [{ x: "", y: 0 }] },
    ]);
    const [isFormat, setIsFormat] = useState(false);

    const dataHandler = () => {
        let cnt = 0;
        if (data) {
            const gpColor = ["hsl(179, 70%, 50%)", "hsl(63, 70%, 50%)"];
            const date = data.date;
            delete data.isPartial;
            delete data.date;

            let temps = Object.keys(data).map((key: any) => {
                // 박재범, 손흥민
                return {
                    id: key,

                    data: Object.keys(data[key]).map((elem: any, i: number) => {
                        return {
                            x: date[i],
                            y: data[key][elem],
                        };
                    }),
                };
            });

            console.log(temps);

            setFormattedData(temps);
        } else {
            alert("데이데 수신에 문제 발생!ㅜㅜ");
        }
    };

    useEffect(() => {
        dataHandler();
    }, [props.data]);

    useEffect(() => {
        console.log("formatted Data: ", formattedData);
        if (formattedData[0]) {
            formattedData[0].id !== "" ? setIsFormat(true) : setIsFormat(false);
        } else {
            setIsFormat(false);
        }
    }, [formattedData]);

    return (
        <>
            {isFormat ? (
                <div
                    style={{
                        width: "100%",
                        height: "350px",
                        margin: "0 auto",
                    }}
                >
                    <ResponsiveLine
                        data={formattedData}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: "point" }}
                        yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: false,
                            reverse: false,
                        }}
                        yFormat=" >-.2d"
                        curve="natural"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            tickValues: [],
                            legend: "date",
                            legendOffset: 36,
                            legendPosition: "middle",
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            tickValues: [10, 50, 100],
                            legend: "count",
                            legendOffset: -40,
                            legendPosition: "middle",
                        }}
                        enableGridX={false}
                        enablePoints={false}
                        colors={{ scheme: "paired" }}
                        lineWidth={2}
                        //pointSize={5}
                        //pointColor={{ theme: "background" }}
                        //pointBorderWidth={1}
                        //pointBorderColor={{ from: "serieColor" }}
                        //pointLabelYOffset={-12}
                        useMesh={true}
                        theme={{
                            axis: {
                                ticks: {
                                    text: {
                                        fill: "rgb(62, 255, 200)", // 이 부분을 수정하여 축 레이블의 색상을 변경하세요.
                                    },
                                },
                            },
                            legends: {
                                text: {
                                    fill: "white", // 이 부분을 수정하여 범례의 글자 색상을 변경하세요.
                                },
                            },
                        }}
                        legends={[
                            {
                                anchor: "bottom-right",
                                direction: "column",
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: "left-to-right",
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: "circle",
                                symbolBorderColor: "rgba(0, 0, 0, .5)",
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemBackground:
                                                "rgba(0, 0, 0, .03)",
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                        tooltip={({ point }) => (
                            <div
                                style={{
                                    borderRadius: "5px",
                                    backgroundColor: point.serieColor,
                                    fontSize: "0.75rem",
                                    width: "90px",
                                    height: "35px",
                                    color: "rgb(64, 64, 64)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <p
                                        style={{ margin: "0 auto" }}
                                    >{`x: ${point.data.xFormatted}`}</p>
                                    <p
                                        style={{ margin: "0 auto" }}
                                    >{`y: ${point.data.yFormatted}`}</p>
                                </div>
                            </div>
                        )}
                    ></ResponsiveLine>
                </div>
            ) : null}
        </>
    );
};

export default TimelapseView;
