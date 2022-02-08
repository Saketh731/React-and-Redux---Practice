import React from 'react';
import PropTypes from 'prop-types';

const Test = (props) =>{
    return(
        <div>
            <h1>{props.str}</h1>
            <h1>{props.bool ? 'Boolean-True': 'Boolean-False'}</h1>
            <h1>{props.strOrNumber}</h1>
            <div>
                {
                    props.arr.map((val)=>{
                        return <li key={val}>{val}</li>
                    })
                }
            </div>
            <div>
                {
                    props.arrOfObj.map((val)=>{
                        return (<li key={val.age}>{val.name}</li>)
                    })
                }
            </div>
            <h1>{props.children}</h1>
        </div>
    )
}

Test.propTypes = {
    str: PropTypes.string, 
    bool: PropTypes.bool,
    strOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    arr: PropTypes.arrayOf(PropTypes.number),
    arrOfObj: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string,
            age: PropTypes.number
        }
    )),
    // children: PropTypes.string  
    children: PropTypes.element.isRequired,
    // random: PropTypes.number.isRequired
}

class TypeChecking extends React.Component{
    render(){
        return(
            <div>
                <Test str="String Type Text" bool strOrNumber={10} arr={[1,2,3]} arrOfObj = {[{name:'Saketh', age:22}, {name:'James', age:24}]}>
                    <div>Child Element</div> 
                    </Test>
            </div>
        );
    }
}

export default TypeChecking;