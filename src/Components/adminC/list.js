import React from "react";
import {PlainList} from "flatlist-react";
import axios from 'axios'


const people = [
    {email: 'Elson@gmail.com', lastName: 'Correia', info: {age: 24}},
    {email: 'John@gmail.com', lastName: 'Doe', info: {age: 18}},
    {email: 'Jane@gmail.com', lastName: 'Doe', info: {age: 34}},
    {email: 'Maria@gmail.com', lastName: 'Carvalho', info: {age: 22}},
    {email: 'Kelly@gmail.com', lastName: 'Correia', info:{age: 23}},
    {email: 'Don@gmail.com', lastName: 'Quichote', info: {age: 39}},
    {email: 'Marcus@gmail.com', lastName: 'Correia', info: {age: 0}},
    {email: 'Bruno@gmail.com', lastName: 'Gonzales', info: {age: 25}},
    {email: 'John@gmail.com', lastName: 'Doe', info: {age: 18}},
    {email: 'Jane@gmail.com', lastName: 'Doe', info: {age: 34}},
    {email: 'Maria@gmail.com', lastName: 'Carvalho', info: {age: 22}},
    {email: 'Kelly@gmail.com', lastName: 'Correia', info:{age: 23}},
    {email: 'Don@gmail.com', lastName: 'Quichote', info: {age: 39}},
    {email: 'Marcus@gmail.com', lastName: 'Correia', info: {age: 0}},
    {email: 'Bruno@gmail.com', lastName: 'Gonzales', info: {age: 25}},
    {email: 'Alonzo@gmail.com', lastName: 'Correia', info: {age: 44}}
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

            <div key={idx}>
                <div style={{color: "black", fontSize: 40,marginTop: 20}}>{person.email} | {person.lastName}</div>
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