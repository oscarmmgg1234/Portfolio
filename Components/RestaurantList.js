import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetaill";
import {withNavigation} from "react-navigation";

const ResultsList = ({title,results,navigation}) => {
    if(!results.length){
        return null;
    }
    return <View><Text style={styles.title} >{title}</Text>
        <FlatList horizontal data={results}
                  keyExtractor={(result)=> result.id}
                  renderItem={({item}) => {
                      return( <TouchableOpacity onPress={() => {navigation.navigate('resultsShows', {id: item.id})}}><ResultsDetail result={item}/></TouchableOpacity>)

                  }}/>
</View>
};

const styles = StyleSheet.create({
title: {
    fontSize: 18,
    fontWeight: "bold"
}
});

export default withNavigation(ResultsList);