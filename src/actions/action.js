export const DATA = "DATA";
export const SEARCH = "SEARCH";
export const ADD = "ADD";

export const dataList = (obj) => {
    return {
        type : DATA,
        data : obj
    }
}

export const searchList = (obj) => {
    console.log(obj,'obj')
    return {
        type : SEARCH,
        data : obj
    }
}

let id = 1 

export const addMenu = (obj) => {
    console.log(obj,'받아')
    return {
        type : ADD,
        data : {
            idx: id++,
            menu_count: obj.menu_count,
            menu_name: obj.menu_name,
            menu_price: obj.menu_price,
            pay_date: obj.pay_date,
        } 
    }
}