import React from 'react';
import {CompanyConsumer} from './companyContext';
import {ThemeConsumer} from './themeContext.js';

class TraineeContext extends React.Component{
    render(){
        return(
            <div>
                <ThemeConsumer>
                    {
                        (styles)=>(
                            <CompanyConsumer>
                                {
                                    (companyName)=>(
                                        <h1 style={styles}>Company- {companyName}</h1>
                                    )
                                }
                            </CompanyConsumer>

                        )   
                    }
                </ThemeConsumer>
            </div>
        )
    }
}

export default TraineeContext;