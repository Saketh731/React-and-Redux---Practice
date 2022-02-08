import React from 'react';
import TeamLeadContext from './TeamLeadContext.js';
import {CompanyProvider} from './companyContext.js';

class ManagerContext extends React.Component{
    render(){
        return(
            <div>
                <CompanyProvider value="ACS Solutions">
                    <TeamLeadContext/>
                </CompanyProvider>
            </div>
        )
    }
}

export default ManagerContext;