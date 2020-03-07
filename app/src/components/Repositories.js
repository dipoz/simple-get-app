import React, { useState, useEffect } from 'react';
import Items from './Repos';
import Pagination from './Pages';
import getItem from './Methods';
import '../App.css';
const URL = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100'

const Repositories = () => {
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            const { error, items } = await getItem(
                URL
            );
            if (error) {
                setError(error);
                setLoad(true);
                return;
            }
            setItems(items.items);
            setLoad(true);
        })();
    }, []);

    //Viser "loading" mens data lastes inn:
    if (!load) return <h2>Loading....</h2>;

    //Viser error mens data lastes inn:
    if (error) return <div>{error}</div>;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Sider vises over tabellen:
    return (
        <div className='container'>
            <h1 className='text-primary mb-3 '>Repositories</h1>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
            />
            <Items items={currentItem} />

        </div>
    );
};

export default Repositories;


