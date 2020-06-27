import React,{useEffect,useState} from 'react';
import yelp from "../api/yelp";

export default () => {
    const [results,setResults] = useState([]);
    const [err,setErr] = useState('');
    const searchApi = async (searchItem)=> {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchItem,
                    location: 'palm springs'
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            setErr('something went wrong');
        }

    };
    useEffect(()=> {
        searchApi('fast food');
    },[]);

    return [searchApi,results,err];
}