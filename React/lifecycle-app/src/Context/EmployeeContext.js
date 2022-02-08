import React from 'react';
import TraineeContext from './TraineeContext.js';
import CompanyContext from './companyContext.js';

class EmployeeContext extends React.Component{
    static contextType = CompanyContext;
    render(){
        return(
            <div>
                Employee Context - {this.context}
               <TraineeContext/>
            </div>
        )
    }
}


export default EmployeeContext;