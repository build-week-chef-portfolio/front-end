import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function APIfetch(address){
    const [isLoading, setIsLoading] = useState(false);
    const [dataToUse, setDataToUse] = useState([]);
    const webAddress = address;
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(webAddress)
            .then(res => {
                console.log("APIfetch.js: function APIfetch: useEffect: axios.then: result ", res);
                setDataToUse(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("APIfetch.js: function APIfetch: useEffect: axios.catch: error ", err);
                setIsLoading(false);
            });
    }, []);

    return dataToUse;
}