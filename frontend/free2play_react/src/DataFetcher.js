// src/DataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/data');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Data from Flask:</h2>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default DataFetcher;
