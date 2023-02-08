import { useState } from "react"
import { useDispatch } from "react-redux";
import { addMenu } from "../../actions/action";
import { useNavigate } from 'react-router-dom';
function CreateComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        menu_name: '',
        menu_price: '',
        menu_count: '',
        pay_date: ''
    })

    const {menu_name, menu_price, menu_count, pay_date} = inputs;

    const onChangeRegisterVal = (e) => {
        const {value, name} = e.target;

        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onRegister = (e) => {
        e.preventDefault();
        console.log('클릭', inputs)
        dispatch(addMenu(inputs));   
        navigate('/');

    }

    return (
        <>
        <div>메뉴를 등록하세요</div>
        <form onSubmit={onRegister}>
            <div>
                <span>메뉴명</span>
                <input type="text" name="menu_name" value={menu_name} onChange={onChangeRegisterVal}></input>
            </div>
            <div>
                <span>메뉴가격</span>
                <input type="number" name="menu_price" value={menu_price} onChange={onChangeRegisterVal}></input>
            </div>
          
            <div>
                <span>메뉴수량</span>
                <input type="number" name="menu_count" value={menu_count} onChange={onChangeRegisterVal}></input>
            </div>
            <div>
                <span>날짜</span>
                <input type="number" name="pay_date" value={pay_date} onChange={onChangeRegisterVal}></input>
            </div>
            <button type="submit"> 등록하기</button>
        </form>
        </>
    )
}

export default CreateComponent