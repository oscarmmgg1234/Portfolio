import React, {useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from "../../Components/SearchBar";
import ResultsList from "../../Components/RestaurantList";
import useResults from "../hooks/useResults";



const search = () => {

    const [term,setTerm] = useState('');
    const [searchApi,results,err] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }


    return <View style={styles.container}><SearchBar term={term} onTermChange={setTerm}
    onTermSubmit={()=>{searchApi(term)}} />
        {err ? <Text>{err}</Text> : null}
    <ResultsList  styles={styles.results} results={filterResultsByPrice('$')} title="Cost Effective"/>
    <ResultsList  styles={styles.results} results={filterResultsByPrice('$$')} title="Bit Pricier"/>
    <ResultsList  styles={styles.results} results={filterResultsByPrice('$$$')} title="Big Spender"/>
    </View>
}

const styles = StyleSheet.create({


});

export default search;
