import React from 'react';

class FragmentChildDemo extends React.Component{
    constructor(props){
        super(props);
        this.items = [{name: "Saketh", age: 22}, {name: "James", age: 24}];
    }
    render(){
        return( 
            // <td>
            //      {
            //         this.items.map(item => {
            //             <React.Fragment key={item.age}>
            //                 <h1>Name - {item.name}</h1>
            //             </React.Fragment>
            //         })
            //      }  
            // </td>

            <React.Fragment>
                <td>Column 1</td>
                <td>Column 2</td>
            </React.Fragment>
        )
    }
}
export default FragmentChildDemo;