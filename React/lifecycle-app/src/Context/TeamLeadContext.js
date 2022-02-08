import React from 'react';
import EmployeeContext from './EmployeeContext.js';
import {ThemeProvider} from './themeContext.js';

class TeamLeadContext extends React.Component{
    render(){
        const styles = {
            color: "red", 
            backgroundColor: "black"  
        }
        return(
            <div>
                <ThemeProvider value={styles}>
                    <EmployeeContext/>
                </ThemeProvider>
            </div>
        )
    }
}

export default TeamLeadContext;