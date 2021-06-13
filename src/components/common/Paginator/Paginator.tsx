import React, {useState} from 'react';
import s from './Paginator.module.css'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({portionSize = 20, ...props}) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages: Array<number> = [];
    let i = 1
    for (i; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(Math.ceil(props.currentPage / portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div>
            <button disabled={portionNumber === 1} className={s.buttonChangeList} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Last
            </button>
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => (
                    <button key={p} onClick={() => props.onPageChanged(p)}
                            className={`${s.numbersPage} ${props.currentPage === p && s.selectedPage}`}>
                        {p}
                    </button>
                ))}
            <button disabled={portionNumber === portionCount} className={s.buttonChangeList} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next
            </button>
        </div>
    )
}

export default Paginator;