import Box from "@/UI/Box";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import css from "@/styles/Intro.module.css";
import layoutStyles from "@/styles/layout.module.css";
import textStyle from "@/styles/text.module.css";
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
                <div className={`${layoutStyles.flexBox} ${css.introWrap}`}>
                    <div className={css.descriptionTxt}>
                        <dt className={textStyle.dt}>요즘 트렌드를 Zoom!</dt>
                        <dd className={textStyle.dd}>
                            분석된 다양한 트렌드를 만나보세요. <br />
                            선두주자가 되는 길은 여기에 있습니다.
                        </dd>
                    </div>
                    <Image
                        className={css.img}
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
