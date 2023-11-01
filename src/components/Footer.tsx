import ftCss from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={ftCss.ftWrap}>
            <div className={ftCss.ftCopy}>
                <p className={ftCss.ftTitleP}>@Copyright</p>
                <p className={ftCss.ftP}>
                    <Link
                        className={ftCss.ftLink}
                        href="https://github.com/gyojinnK"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/gyojinnK
                    </Link>
                </p>
            </div>
            <div className={ftCss.ftIndex}>
                <p className={ftCss.ftTitleP}>@Index</p>
                <p className={ftCss.ftP} style={{ marginRight: 12 }}>
                    관련 주제
                </p>
                <p className={ftCss.ftP} style={{ marginRight: 12 }}>
                    관심도 동향
                </p>
                <p className={ftCss.ftP}>관심도 예측</p>
            </div>
            <div className={ftCss.ftContact}>
                <p className={ftCss.ftTitleP}>@Contact</p>
                <p className={ftCss.ftP}>
                    <Link
                        className={ftCss.ftLink}
                        href="mailto:ksmug1998@naver.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ksmug1998@gmail.com
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
