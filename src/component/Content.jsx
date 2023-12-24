/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Content = () => {
    const urlApi =
        'https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at';
    const [isPage, setPage] = useState('10');
    const [ideas, setIdeas] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getStoredData = () => {
            const storedData = sessionStorage.getItem('yourDataKey');
            if (storedData) {
                setData(JSON.parse(storedData));
            }
        };

        // Fungsi untuk menyimpan data ke penyimpanan sesi
        const storeData = (data) => {
            sessionStorage.setItem(urlApi, JSON.stringify(data));
        };

        const fetchData = async () => {
            try {
                const resp = await axios.get(urlApi, {
                    params: {
                        page: currentPage,
                        per_page: 10,
                    },
                });
                setIdeas(resp.data.data);
                storeData(response.data.data);
            } catch (error) {
                console.error('Error fetching Data', error);

                getStoredData()
            }
        };

        fetchData();
    }, [urlApi, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePage = (page) => {
        setPage(page);
    };

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);

        if (selectedOption === 'newest') {
            const sortedData = [...ideas].sort(
                (a, b) => new Date(b.published_at) - new Date(a.published_at)
            );
            sortedData(sortedData);
        } else if (selectedOption === 'oldest') {
            const sortedData = [...ideas].sort(
                (a, b) => new Date(a.published_at) - new Date(b.published_at)
            );
            setSortedData(sortedData);
        } else {
            setSortedData([]);
        }
    };

    return (
        <div className='container flex flex-col gap-y-20 mx-auto pb-40'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-xl'>
                    Showing 1-<span>10</span> of 100
                </p>
                <div className='flex gap-x-10'>
                    <div className='flex items-center gap-5'>
                        <p className='font-semibold text-xl'>Show per page</p>
                        <select>
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>50</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='font-semibold text-xl'>Sort By </p>
                        <select value={sortOption} onChange={handleSortChange}>
                            <option value='newest'>Newest</option>
                            <option value='oldest'>Oldest</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-x-4 gap-y-[20rem] grid-rows-2 justify-center'>
                {ideas.map((item, index) => (
                    <div className='flex flex-col h-36 shadow-lg' key={index}>
                        <img
                            src={item.small_image[length].url}
                            alt=''
                            className='rounded-t-xl object-cover'
                        />
                        <div className='bg-white rounded-b-xl p-5 shadow-lg'>
                            <p className='text-xl text-slate-300 font-semibold'>
                                {item.published_at}
                            </p>
                            <h2 className='text-2xl font-semibold h-32 line-clamp-3'>
                                {item.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-x-5 self-center pt-60 items-center'>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    <BiChevronLeft className='text-3xl cursor-pointer' />
                </button>
                <p
                    className={`font-semibold text-2xl cursor-pointer ${
                        isPage === '10' ? 'bg-orange-500 p-2 rounded-lg' : ''
                    }`}
                    onClick={() => handlePage('10')}
                >
                    10
                </p>
                <p
                    className={`font-semibold text-2xl cursor-pointer ${
                        isPage === '20' ? 'bg-orange-500 p-2 rounded-lg' : ''
                    }`}
                    onClick={() => handlePage('20')}
                >
                    20
                </p>
                <p
                    className={`font-semibold text-2xl cursor-pointer ${
                        isPage === '50' ? 'bg-orange-500 p-2 rounded-lg' : ''
                    }`}
                >
                    50
                </p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <BiChevronRight className='text-3xl cursor-pointer' />
                </button>
            </div>
        </div>
    );
};

export default Content;
