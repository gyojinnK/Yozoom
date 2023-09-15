import Box from "@/UI/Box";
import "./Search.css";
import Image from "next/image";
import nLogo from "../../public/img/naver_logo.png";
import styles from "./css_modules/text.module.css";

const Search = () => {
    return (
        <Box>
            <div className="searchTxt">
                <dt className={`${styles.title} ${styles.dt}`}>검색어 분석</dt>
                <dd className={styles.dd}>대형 플랫폼의 검색을 분석합니다.</dd>
            </div>
            <Image src={nLogo} alt="logo" />
        </Box>
    );
};

export default Search;
