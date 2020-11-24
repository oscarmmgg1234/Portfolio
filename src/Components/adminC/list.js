import React from "react";
import {PlainList} from "flatlist-react";


const people = [
    {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
    {firstName: 'John', lastName: 'Doe', info: {age: 18}},
    {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
    {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
    {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
    {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
    {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
    {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
    {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
]

const List = () => {

    const renderPerson = (person, idx) => {

        return (
            <li key={idx}>
                <div style={{color: "white"}}>{person.firstName} {person.lastName} | {person.info.age}</div>
            </li>
        );
    }
    return (
        <PlainList
            list={people}
            renderItem={renderPerson}
        />
    )
}

export default List;