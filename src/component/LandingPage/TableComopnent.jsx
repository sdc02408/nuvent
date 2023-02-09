import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMenu } from "../../actions/action";
import Pagination from "./Pagination";

function TableComopnent() { 
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    //전체 메뉴
    const initDataList = useSelector(state => state.reducers)

    //메뉴 삭제
    const onDeleteMenu = (idx) => {
        dispatch(deleteMenu(idx))
    }

    return (
        <div>
            <table className="table contentWidth">
             <thead>
                <tr>
                <th>ID</th>
                <th>메뉴</th>
                <th>가격</th>
                <th>수량</th>
                <th>날짜</th>
                <th>수정</th>
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
                            <td><Link to='/create' state={{ data: data }}>수정</Link></td>
                            <td><button onClick={()=> onDeleteMenu(data.idx)}>삭제</button></td>
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