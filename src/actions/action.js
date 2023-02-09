export const DATA = "DATA";
export const SEARCH = "SEARCH";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";

export const dataList = (obj) => {
    return {
        type : DATA,
        data : obj
    }
}

export const searchList = (obj) => {
    return {
        type : SEARCH,
        data : obj
    }
}

let id = 100000100;

export const addMenu = (obj) => {
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

export const deleteMenu = (idx) => {
    return {
        type : DELETE,
        idx
    }
}

export const updateMenu = (obj) => {
    return {
        type : UPDATE,
        data : {
            idx: obj.idx,
            menu_count: obj.menu_count,
            menu_name: obj.menu_name,
            menu_price: obj.menu_price,
            pay_date: obj.pay_date,
        } 
    }
}