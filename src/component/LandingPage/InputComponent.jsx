import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataList, searchList } from "../../actions/action";

function InputComponent () {
    const dispatch = useDispatch();

    const [search,setSearch] = useState("");
    
    const onChangeSearchVal = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    // 메뉴 검색
    const onSearch = (e) => {
        e.preventDefault();

        if(search === null || search === ''){
            alert('검색할 값을 입력하세요')
        } else{
            dispatch(searchList(search));
        }
    }

    // 검색된 메뉴 초기화
    const onSearchInit = (e) =>{
        e.preventDefault();
        setSearch('')
        dispatch(dataList());   
    }

    return (
        <div className="inputDiv contentWidth">
       
            <form onSubmit={onSearch}>
                <input type="text" value={search} onChange={onChangeSearchVal}></input>
                <button type="submit">검색</button>
                <button onClick={onSearchInit}>초기화</button>
            </form>

            <Link to="/create">메뉴등록</Link>
        </div>
    )
}

export default InputComponent