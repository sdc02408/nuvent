import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addMenu, updateMenu } from "../../actions/action";
import { useNavigate, useLocation  } from 'react-router-dom';
function CreateComponent() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 수정할 메뉴 데이터
    const data = location.state?.data;

    const [inputs, setInputs] = useState({
        menu_name: '' ,
        menu_price: '' ,
        menu_count: '' ,
        pay_date: new Date(+new Date + 3240 * 10000).toISOString().replace('T', ' ').replace(/\..*/, '')
    })

    const {menu_name, menu_price, menu_count, pay_date} = inputs;

    const onChangeRegisterVal = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    //메뉴 등록
    const onRegister = (e) => {
        e.preventDefault();
        dispatch(addMenu(inputs));   
        navigate('/');
    }

    //메뉴 수정
    const onUpdate = (e) => {
        e.preventDefault();
        dispatch(updateMenu(inputs));   
        navigate('/');
    }

    useEffect(() => {
        if(data !== undefined) {
            setInputs(data)
        }
    },[])

    return (
        <div>
            {
                data === undefined ?
                    <h2 className='center'>메뉴를 등록하세요</h2>
                    :
                    <h2 className='center'>메뉴를 수정하세요</h2>
                }

            <form className="contentWidth">
                
                <div>
                    <span className="mr10">메뉴명</span>
                    <input type="text" name="menu_name" value={menu_name} onChange={onChangeRegisterVal}></input>
                </div>
                <div>
                    <span className="mr10">메뉴가격</span>
                    <input type="number" name="menu_price" value={menu_price} onChange={onChangeRegisterVal}></input>
                </div>
            
                <div>
                    <span className="mr10">메뉴수량</span>
                    <input type="number" name="menu_count" value={menu_count} onChange={onChangeRegisterVal}></input>
                </div>
                <div>
                    <span className="mr10">날짜</span>
                    <input type="text" name="pay_date" value={pay_date} onChange={onChangeRegisterVal}></input>
                </div>
                {
                data === undefined ?
                <button type="submit" onClick={onRegister}>등록하기</button>
                :
                <button type="submit" onClick={onUpdate}>수정하기</button>
                }
            </form>
        </div>
    )
}

export default CreateComponent