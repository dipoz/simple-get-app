import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    //Beregner antall sider:
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (

        //returnerer en liste med sider:
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='!#' className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>

    );
};

export default Pagination;