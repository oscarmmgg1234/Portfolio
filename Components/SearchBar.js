import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather style={{alignSelf: 'center',fontSize: 35,marginHorizontal: 15}} name={"search"}/>
            <TextInput autoCapitalize="none" autoCorrect={false} value={term} onChangeText={onTermChange} style={styles.inputStyle} placeholder="Search"
            onEndEditing={onTermSubmit}></TextInput>

        </View>

    )

};

const styles = StyleSheet.create({
background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 17,
    marginTop: 15,
    flexDirection: "row",

},
    inputStyle: {

        fontSize: 18,
        flex:1,
        marginLeft: 3
    }
});

export default SearchBar;