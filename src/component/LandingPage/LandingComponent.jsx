import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataList } from '../../actions/action';
import InputComponent from './InputComponent';
import TableComopnent from './TableComopnent';

function LandingPage() {
    const dispatch = useDispatch();
    const initDataList = useSelector(state => state.reducers.initialState)
    useEffect(() => {
        dispatch(dataList());
    },[])
      console.log(initDataList,'initDataList')
      return (
        <div>
            <div>랜딩페이지</div>
            <InputComponent></InputComponent>
            <TableComopnent></TableComopnent>
        </div>
        )
}

export default LandingPage