import Box from "@/UI/Box";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import style from "./Intro.module.css";
import layoutStyles from "./css_modules/layout.module.css";
import textStyle from "./css_modules/text.module.css";
import Head from "next/head";

const Intro = () => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <Box>
                <div className={`${layoutStyles.flexBox} ${style.introWrap}`}>
                    <div className={style.descriptionTxt}>
                        <dt className={textStyle.dt}>요즘 트렌드를 Zoom!</dt>
                        <dd className={textStyle.dd}>
                            분석된 다양한 트렌드를 만나보세요. <br />
                            선두주자가 되는 길은 여기에 있습니다.
                        </dd>
                    </div>
                    <Image
                        src={logo}
                        alt="logo of service"
                        width={300}
                        height={58}
                        priority={false}
                    />
                </div>
            </Box>
        </>
    );
};

export default Intro;
