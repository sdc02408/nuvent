import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataList } from "../../actions/action";
import Pagination from "./Pagination";

function TableComopnent() { 
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const initDataList = useSelector(state => state.reducers)

    // useEffect(() => {
    //      //전체 데이터 호출
    //     // dispatch(dataList());   
    //     console.log(initDataList,'테이블')

    // },[initDataList])

    // useEffect(() => {
    // },[initDataList])
    return (
        <div>
            테이블 컴포넌트
            <table className="table">
             <thead>
                <tr>
                <th>ID</th>
                <th>메뉴</th>
                <th>가격</th>
                <th>수량</th>
                <th>날짜</th>
                <th>삭제</th>
                </tr>
            </thead>
                <tbody>
                    {
                        initDataList && initDataList.slice(offset, offset + limit).map((data, index) => (
                           <tr key={index}>
                            <td>{data.idx}</td>
                            <td>{data.menu_name}</td>
                            <td>{data.menu_price}</td>
                            <td>{data.menu_count}</td>
                            <td>{data.pay_date}</td>
                            <td><button>삭제</button></td>
                           </tr>
                        )) 
                    }
                </tbody>
            </table>
            {
                        initDataList &&
                    <Pagination
                        total={initDataList.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
            }   


        </div>
    )

}

export default TableComopnent