import React from "react";
import {PlainList} from "flatlist-react";
import axios from 'axios'


const people = [
    {email: 'Elson@gmail.com', lastName: 'Correia', info: {index: 1}},
    {email: 'John@gmail.com', lastName: 'Doe', info: {index: 2}},
    {email: 'Jane@gmail.com', lastName: 'Doe', info: {index: 3}},
    {email: 'Maria@gmail.com', lastName: 'Carvalho', info: {index: 4}},
    {email: 'Kelly@gmail.com', lastName: 'Correia', info:{index: 5}},
    {email: 'Don@gmail.com', lastName: 'Quichote', info: {index: 6}},
    {email: 'Marcus@gmail.com', lastName: 'Correia', info: {index: 7}},
    {email: 'Bruno@gmail.com', lastName: 'Gonzales', info: {index: 8}},
    {email: 'John@gmail.com', lastName: 'Doe', info: {index: 9}},
    {email: 'Jane@gmail.com', lastName: 'Doe', info: {index: 10}},
    {email: 'Maria@gmail.com', lastName: 'Carvalho', info: {index: 11}},
    {email: 'Kelly@gmail.com', lastName: 'Correia', info:{index: 12}},
    {email: 'Don@gmail.com', lastName: 'Quichote', info: {index: 13}},
    {email: 'Marcus@gmail.com', lastName: 'Correia', info: {index: 14}},
    {email: 'Bruno@gmail.com', lastName: 'Gonzales', info: {index: 15}},
    {email: 'Alonzo@gmail.com', lastName: 'Correia', info: {index: 16}}
]

//post request to handle uploading data to rds
//get request to handle updating list




const List = () => {
   function getData(){
        axios.get('https://u96nx3rkj6.execute-api.us-west-1.amazonaws.com/GET/').then(res=> {
            return <h1>{res}</h1>
        })
    }
    const renderPerson = (person, idx) => {

        return (

            <div key={idx} style={{ width: "100%",padding: 5}}>
                <div style={{color: "black", fontSize: 40,marginTop: 20,right: 0}}>{person.info.index} | {   person.email} | {person.lastName}</div>
            </div>

        );
    }
    return (
        <>


        <PlainList
            list={people}
            renderItem={renderPerson}
        />
        </>
    )
}

export default List;