import { useEffect, useState } from "react";
import css from "@/styles/AiProccessingView.module.css";

const AiProccessingView = (props: { data: string[] }) => {
    const [formattedData, setFormattedData] = useState<number[] | void[]>([]);

    const dataFormattingHandler = (data: string[]) => {
        if (data) {
            // data가 undefined 또는 null이 아닌 경우에만 처리
            const dataN = data.map(Number);
            const min = Math.min(...dataN);
            const max = Math.max(...dataN);
            const formatted = dataN.map((item: number) => {
                return parseInt(
                    (((item - min) / (max - min)) * 100).toFixed(2)
                );
            });
            setFormattedData(formatted);
        }
    };

    const getBackgroundColor = (index: number, length: number) => {
        const intensity = ((index / length) * 0.8 + 0.2).toFixed(2);
        return `rgba(62, 255, 200, ${intensity})`;
    };

    const length = props.data?.length;

    useEffect(() => {
        dataFormattingHandler(props.data);
    }, [props.data]);

    return (
        <div className={css.viewWrap}>
            <div className={css.head}>
                <h2>향후 1개월</h2>
                <h2>향후 10개월</h2>
            </div>
            <div className={css.body}>
                <ul className={css.ul}>
                    {formattedData?.map((item: any, i: number) => (
                        <li
                            className={css.li}
                            key={item}
                            style={{
                                backgroundColor: getBackgroundColor(i, length),
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AiProccessingView;
