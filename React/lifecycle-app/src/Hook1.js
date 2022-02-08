import React, {useState} from 'react';


function Hook1(){
    const [name, setName] = useState({firstName: '', lastName: ''});

    let changefirstName = (event)=>{
        setName((prevName)=>{
            // return {firstName: event.target.value};
            return {...prevName, firstName: event.target.value};
        } )
    }
    let changelastName = (event)=>{
        setName((prevName)=>{
            // return {lastName: event.target.value};
            return {...prevName, lastName: event.target.value};
        } )
    }
    return(
        <form>
            <input type="text" value={name.firstName} onChange={changefirstName}/>
            <input type="text" value={name.lastName} onChange={changelastName}/>
            <h2>FirstName is = {name.firstName}</h2>
            <h2>LastName is = {name.lastName}</h2>
            <h1>{JSON.stringify(name)}</h1>
        </form>
    )
}
export default Hook1;