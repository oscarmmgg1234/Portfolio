import React, {useState,useEffect} from 'react';
import {StyleSheet,View,Text,FlatList,Image} from 'react-native';
import yelp from "../api/yelp";

const resultsShow = ({navigation}) =>
{
    const [result,setResult] = useState(null)
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const idd = ('/' + id);
        const response = await yelp.get(idd);
        setResult(response.data);
    };
useEffect(()=>{
    getResult(id);
},[]);
    if(!result) {
        return null;
    }
    return <View style={styles.Pcontainer}><Text style={styles.text}>{result.name}</Text>
    <FlatList data={result.photos}
    keyExtractor={(photo) => photo}
    renderItem={({item})=>{
        return <Image style={styles.image} source={{uri: item}}/>
    }}

    />

    </View>
};

const styles = StyleSheet.create({
    Pcontainer:{
        alignItems: "center"
    },
image:{
        borderRadius: 8,
    height: 200,
    width: 200,
    marginVertical: 15
},
    text:{
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default resultsShow;