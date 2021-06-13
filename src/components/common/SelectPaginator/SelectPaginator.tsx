import React, {useState} from 'react';
import s from './SelectPaginator.module.css'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

let SelectPaginator: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    let i = 1
    for (i; i <= pagesCount; i++) {
        pages.push(i);
    }

    let handleChange = (e: any) => {
        props.onPageChanged(Number(e.target.value))
    }


    return (
        <div>
            <select onChange={handleChange} value={props.currentPage} className={s.selectPage}>
                {pages.map(p => (
                    <option key={p} className={s.optionPage}>{p} </option>
                ))}
            </select>
        </div>
    )
}

export default SelectPaginator;