import React from 'react';
import FragmentAndProtals from '../FragmentAndPortals.js';
import FragmentChildDemo from './FragmentChildDemo.js';

class FragmentDemo extends React.Component{
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <FragmentChildDemo/>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default FragmentDemo;