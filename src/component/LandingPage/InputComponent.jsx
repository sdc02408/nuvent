import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataList, searchList } from "../../actions/action";

function InputComponent () {
    const dispatch = useDispatch();

    const [search,setSearch] = useState("");
    const initDataList = useSelector(state => state.reducers)

    const onChangeSearchVal = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search,'serac')
    }

    useEffect(() => {

    },[initDataList])    

    const onSearch = (e) => {
        e.preventDefault();
        if(search === null || search === ' '){
            alert('검색할 값을 입력하세요')
        } else{
            const searchVal = initDataList.filter((menu) => menu.menu_name.includes(search))
            dispatch(searchList(searchVal));
        }
    }

    const onSearchInit = (e) =>{
        e.preventDefault();
        setSearch('')
        dispatch(dataList());   
    }

    return (
        <div>
            검색 창 
            <form onSubmit={onSearch}>
                <input type="text" value={search} onChange={onChangeSearchVal}></input>
                <button type="submit">검색</button>
                <button onClick={onSearchInit}>초기화</button>
            </form>


            <Link to="/create">등록하러가기</Link>
        </div>
    )
}

export default InputComponent