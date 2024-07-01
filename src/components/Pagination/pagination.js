import React from "react";
import classnames from "classnames";
import "./pagination.css";
const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    // const paginationRange = usePagination({
    //     currentPage,
    //     totalCount,
    //     siblingCount,
    //     pageSize
    // });

    // if (currentPage === 0 || paginationRange?.length < 2) {
    //     return null;
    // }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const numbersArray = Array.from({ length: Math.ceil(totalCount/9) }, (_, index) => index + 1);

//    console.log(first)
    return (
        <ul
            className={classnames("pagination-container", { [className]: className })}
        >
            <li
                className={classnames("pagination-item", {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div>prev</div>
            </li>
            {numbersArray?.map((pageNumber) => {
               

                return (
                    <li
                        className={classnames("pagination-item", {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames("pagination-item", {
                    disabled: currentPage === Math.ceil(totalCount / 9)
                })}
                onClick={onNext}
            >
                <div>next</div>
            </li>
        </ul>
    );
};

export default Pagination;
