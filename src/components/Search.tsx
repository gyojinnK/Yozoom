import Box from "@/UI/Box";
import Image from "next/image";
import nLogo from "../../public/img/naver_logo.png";
import styles1 from "./css_modules/text.module.css";
import styles2 from "./css_modules/layout.module.css";

const Search = () => {
    return (
        <Box>
            <div className={`${styles2.flexBox}`} style={{ height: "100px" }}>
                <div className="searchTxt">
                    <dt
                        className={`${styles1.title} ${styles1.dt} ${styles2.dtLayout}`}
                    >
                        검색어 분석
                    </dt>
                    <dd className={`${styles1.dd} ${styles2.ddLayout}`}>
                        대형 플랫폼의 검색을 분석합니다.
                    </dd>
                </div>
                <Image src={nLogo} alt="logo" style={{ marginTop: "10px" }} />
            </div>
        </Box>
    );
};

export default Search;
