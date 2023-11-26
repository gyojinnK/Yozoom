import loadImg from "../../public/img/loading.png";
import Image from "next/image";
import css from "@/styles/Loading.module.css";

const Loading = () => {
    return (
        <div className={css.ldWrap}>
            <Image
                className={css.ldImg}
                src={loadImg}
                alt="loading"
                width={50}
                height={50}
            />
        </div>
    );
};

export default Loading;
