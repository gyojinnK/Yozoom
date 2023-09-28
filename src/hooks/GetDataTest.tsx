import axios from "axios";

export const getDataToDj = async () => {
    // try {
    //     const response = await axios.get("http://localhost:8000/api/test");
    //     console.log(response.data);
    // } catch (error) {
    //     console.error("Error: ", error);
    // }

    try {
        const response = await fetch("http://localhost:8000/api/craw");
        if (!response.ok) {
            // HTTP 상태 체크
            throw new Error("HTTP error " + response.status);
        }
        const data = await response.json(); // 응답을 JSON으로 파싱
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
