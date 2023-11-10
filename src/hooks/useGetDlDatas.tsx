const useGetDlDatas = async () => {
    try {
        const res = await fetch(
            "http://localhost:8000/call_datas_app/get-dl-trends/"
        );
        if (!res.ok) {
            throw new Error("HTTP error " + res.status);
        }
        const datas = await res.json();
        console.log(datas);
    } catch (err) {
        console.error(err);
    }
};

export default useGetDlDatas;

// api 연동 코드까지 작성함
// 이제 프론트엔드에서 트리거 생성해서 호출하는거 할 차례
