import Box from "@/UI/Box";
import Image from "next/image";
import nLogo from "../../public/img/naver_logo.png";
import textCss from "@/styles/text.module.css";
import layoutCss from "@/styles/layout.module.css";

const Search = () => {
    return (
        <Box>
            <div className={`${layoutCss.flexBox}`} style={{ height: "100px" }}>
                <div className="searchTxt">
                    <dt
                        className={`${textCss.title} ${textCss.dt} ${layoutCss.dtLayout}`}
                    >
                        검색어 분석
                    </dt>
                    <dd className={`${textCss.dd} ${layoutCss.ddLayout}`}>
                        대형 플랫폼의 검색을 분석합니다.
                    </dd>
                </div>
                <Image src={nLogo} alt="logo" style={{ marginTop: "10px" }} />
            </div>
        </Box>
    );
};

export default Search;
