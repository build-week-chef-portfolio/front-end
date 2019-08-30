import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';

export default function GetData(props){
    const [isLoading, setIsLoading] = useState(false);
    const [dataToUse, setDataToUse] = useState([]);
    const webAddress = props.address;
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(webAddress)
            .then(res => {
                console.log("APIfetch.js: function APIfetch: useEffect: axios.then: result ", res);
                setDataToUse(res);
                setIsLoading(false);
            })
            .catch(err => {
                console.log("APIfetch.js: function APIfetch: useEffect: axios.catch: error ", err);
                setIsLoading(false);
            });
    }, []);

    return(
        dataToUse
    );
}